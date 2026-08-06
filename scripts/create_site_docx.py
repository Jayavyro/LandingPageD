"""Build a single page-wise DOCX of all Avyro site content from site-content.json."""

from __future__ import annotations

import json
from pathlib import Path

from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor

NAVY = RGBColor(0x0F, 0x1F, 0x2E)
SLATE = RGBColor(0x2C, 0x3E, 0x50)
BODY = RGBColor(0x3D, 0x4A, 0x57)
MUTED = RGBColor(0x6B, 0x78, 0x86)
TEAL = RGBColor(0x0D, 0x7A, 0x7A)
TEAL_SOFT = "E6F4F4"
LIGHT_BG = "F4F7F8"
WHITE = RGBColor(0xFF, 0xFF, 0xFF)

ROOT = Path(__file__).resolve().parents[1]
JSON_PATH = ROOT / "scripts" / "site-content.json"
OUT_PATH = ROOT / "Avyro_Full_Site_Content.docx"

RATING_LABELS = {"strong": "Strong", "partial": "Partial", "weak": "Weak / none"}


def set_run(run, *, size=11, bold=False, color=BODY, font="Calibri", italic=False):
    run.font.name = font
    run._element.rPr.rFonts.set(qn("w:eastAsia"), font)
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.italic = italic
    run.font.color.rgb = color


def set_para(p, *, space_before=0, space_after=8, align=WD_ALIGN_PARAGRAPH.LEFT):
    pf = p.paragraph_format
    pf.space_before = Pt(space_before)
    pf.space_after = Pt(space_after)
    pf.alignment = align
    pf.line_spacing = 1.15


def add_text(p, text, **kwargs):
    run = p.add_run(str(text))
    set_run(run, **kwargs)
    return run


def heading(doc, text, level=1):
    p = doc.add_paragraph()
    set_para(p, space_after=10 if level == 1 else 6)
    sizes = {1: 22, 2: 14, 3: 12}
    colors = {1: NAVY, 2: SLATE, 3: TEAL}
    fonts = {1: "Calibri Light", 2: "Calibri", 3: "Calibri"}
    add_text(p, text, size=sizes[level], bold=True, color=colors[level], font=fonts[level])
    return p


def badge(doc, text):
    p = doc.add_paragraph()
    set_para(p, space_after=6)
    add_text(p, str(text).upper(), size=9, bold=True, color=TEAL)
    return p


def body(doc, text, *, after=8, before=0, italic=False):
    if not text:
        return None
    p = doc.add_paragraph()
    set_para(p, space_before=before, space_after=after)
    add_text(p, text, size=11, color=BODY, italic=italic)
    return p


def muted(doc, text, *, after=8):
    p = doc.add_paragraph()
    set_para(p, space_after=after)
    add_text(p, text, size=10, color=MUTED, italic=True)
    return p


def bullet(doc, text, *, bold_prefix=None):
    p = doc.add_paragraph(style="List Bullet")
    set_para(p, space_after=4)
    if bold_prefix:
        add_text(p, bold_prefix, size=11, bold=True, color=SLATE)
        add_text(p, text, size=11, color=BODY)
    else:
        add_text(p, text, size=11, color=BODY)
    return p


def cta(doc, text):
    if isinstance(text, dict):
        text = text.get("label") or text.get("text") or ""
    if not text:
        return None
    p = doc.add_paragraph()
    set_para(p, space_before=4, space_after=4)
    add_text(p, "→  " + str(text), size=11, bold=True, color=TEAL)
    return p


def divider(doc):
    p = doc.add_paragraph()
    set_para(p, space_before=2, space_after=10)
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "12")
    bottom.set(qn("w:space"), "1")
    bottom.set(qn("w:color"), "0D7A7A")
    pBdr.append(bottom)
    pPr.append(pBdr)


def page_break(doc):
    doc.add_page_break()


def set_cell_shading(cell, hex_color):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), hex_color)
    shd.set(qn("w:val"), "clear")
    tcPr.append(shd)


def set_cell_margins(cell, top=40, bottom=40, left=70, right=70):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement("w:tcMar")
    for edge, val in (("top", top), ("bottom", bottom), ("left", left), ("right", right)):
        node = OxmlElement(f"w:{edge}")
        node.set(qn("w:w"), str(val))
        node.set(qn("w:type"), "dxa")
        tcMar.append(node)
    tcPr.append(tcMar)


def add_table(doc, headers, rows, *, highlight_last=False):
    if not headers:
        return
    table = doc.add_table(rows=1 + len(rows), cols=len(headers))
    table.style = "Table Grid"
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    for i, h in enumerate(headers):
        cell = table.rows[0].cells[i]
        cell.text = ""
        p = cell.paragraphs[0]
        add_text(p, h, size=9, bold=True, color=WHITE)
    for r_i, row in enumerate(rows):
        for c_i, val in enumerate(row):
            cell = table.rows[r_i + 1].cells[c_i]
            cell.text = ""
            p = cell.paragraphs[0]
            add_text(p, "" if val is None else str(val), size=9, color=BODY)
    for r_idx, row in enumerate(table.rows):
        for cell in row.cells:
            set_cell_margins(cell)
            for p in cell.paragraphs:
                set_para(p, space_before=1, space_after=1)
            if r_idx == 0:
                set_cell_shading(cell, "0F1F2E")
            elif highlight_last and r_idx == len(table.rows) - 1:
                set_cell_shading(cell, TEAL_SOFT)
                for p in cell.paragraphs:
                    for run in p.runs:
                        run.font.bold = True
                        run.font.color.rgb = NAVY
            elif r_idx % 2 == 1:
                set_cell_shading(cell, LIGHT_BG)
    doc.add_paragraph()


def section_banner(doc, part, page_label, title, eyebrow=None, route=None):
    p = doc.add_paragraph()
    set_para(p, space_after=2)
    add_text(p, f"{part}  ·  {page_label}", size=8, bold=True, color=MUTED)
    if route:
        muted(doc, route, after=4)
    if eyebrow:
        badge(doc, eyebrow)
    heading(doc, title, 1)
    divider(doc)


def faq_block(doc, items, q_key="question", a_key="answer"):
    for item in items or []:
        q = item.get(q_key) or item.get("q") or item.get("title")
        a = item.get(a_key) or item.get("a") or item.get("body") or item.get("answer")
        if not q:
            continue
        p = doc.add_paragraph()
        set_para(p, space_before=6, space_after=2)
        add_text(p, "Q: ", size=11, bold=True, color=TEAL)
        add_text(p, q, size=11, bold=True, color=NAVY)
        if a:
            body(doc, a, after=6)


def use_case_page(doc, data, part_label):
    section_banner(doc, part_label, "Use Case", data["headline"], data.get("eyebrow"), data.get("route"))
    body(doc, data.get("subtitle"))

    before = data.get("before") or {}
    after = data.get("after") or {}
    heading(doc, before.get("title") or "Before Avyro", 2)
    body(doc, before.get("subtitle") or before.get("description") or before.get("copy"))
    for point in before.get("points") or before.get("items") or []:
        bullet(doc, point if isinstance(point, str) else point.get("text", str(point)))

    heading(doc, after.get("title") or "After Avyro", 2)
    body(doc, after.get("subtitle") or after.get("description") or after.get("copy"))
    for point in after.get("points") or after.get("items") or []:
        bullet(doc, point if isinstance(point, str) else point.get("text", str(point)))

    heading(doc, data.get("capabilitiesTitle") or "Capabilities", 2)
    if data.get("capabilitiesEyebrow"):
        muted(doc, data["capabilitiesEyebrow"])
    rows = []
    for cap in data.get("capabilities") or []:
        rows.append([cap.get("title", ""), cap.get("description", "")])
    if rows:
        add_table(doc, ["Capability", "Description"], rows)

    heading(doc, data.get("questionsTitle") or "Questions", 2)
    if data.get("questionsEyebrow"):
        muted(doc, data["questionsEyebrow"])
    faq_block(doc, data.get("questions") or [])


def build_cover(doc, data):
    for _ in range(3):
        doc.add_paragraph()
    p = doc.add_paragraph()
    set_para(p, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=6)
    add_text(p, "AVYRO", size=36, bold=True, color=NAVY, font="Calibri Light")
    p = doc.add_paragraph()
    set_para(p, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=16)
    add_text(p, "Complete Site Content Document", size=18, color=TEAL, font="Calibri Light")
    divider(doc)
    body(
        doc,
        "All user-facing marketing copy from the Avyro website — homepage, use cases, "
        "resources, product modules, feature pages, industries, and pricing — organized page by page.",
    )
    muted(doc, "Generated from live site constants for accuracy.")

    toc = [
        ("Part A", "Homepage sections"),
        ("Part B", "Use cases (PM, Principals, Ops, Finance)"),
        ("Part C", "Resources (all tabs + competitive comparisons)"),
        ("Part D", "Platform, features & product modules"),
        ("Part E", "Industry pages"),
        ("Part F", "Pricing"),
    ]
    heading(doc, "Document map", 2)
    add_table(doc, ["Part", "Contents"], toc)


def build_home(doc, home):
    # Hero
    h = home["hero"]
    section_banner(doc, "PART A", "01  Home / Hero", h["headline"], h["badge"], "/")
    body(doc, h["subhead"])
    cta(doc, "Book a Demo")
    cta(doc, h.get("calculatorCta"))
    trust = h.get("trust") or {}
    heading(doc, "Trust bar", 3)
    rows = [[trust.get("label", "Trusted by"), trust.get("brand", "")]]
    for s in trust.get("stats") or []:
        rows.append([s.get("value") or s.get("metric", ""), s.get("label") or s.get("caption", "")])
    add_table(doc, ["Metric", "Detail"], rows)
    page_break(doc)

    # Revenue leaks
    r = home["revenueLeaks"]
    section_banner(doc, "PART A", "02  Home / Revenue Leaks", r["headline"], r["badge"])
    body(doc, r["subtitle"])
    rows = []
    for item in r.get("items") or []:
        rows.append(
            [
                item.get("number") or item.get("amount") or item.get("figure") or item.get("value", ""),
                item.get("title", ""),
                item.get("description", ""),
                item.get("why") or item.get("reason", ""),
            ]
        )
    add_table(doc, ["Figure", "Title", "Description", "Why"], rows)
    page_break(doc)

    # Solution
    s = home["theSolution"]
    section_banner(doc, "PART A", "03  Home / The Solution", s["headline"], s["badge"])
    body(doc, s.get("journeyIntro"))
    for step in s.get("journey") or []:
        role = step.get("role") or step.get("title") or step.get("label") or ""
        action = step.get("action") or step.get("description") or ""
        bullet(doc, f"{role} — {action}" if action else role)
    page_break(doc)

    # Do & Outcome
    d = home["doAndOutcome"]
    section_banner(doc, "PART A", "04  Home / Do & Outcome", d["headline"], d["badge"])
    heading(doc, d.get("accent", ""), 2)
    body(doc, d.get("subtitle"))
    muted(doc, f"{d.get('doLabel')}  ·  {d.get('outcomeLabel')}")
    for item in d.get("items") or []:
        step = item.get("step") or item.get("number") or ""
        label = item.get("label") or item.get("title") or ""
        heading(doc, f"{step} — {label}".strip(" —"), 3)
        body(doc, item.get("doTitle", ""), after=4)
        body(doc, item.get("doDescription") or item.get("doCopy", ""))
        for f in item.get("features") or []:
            bullet(doc, f if isinstance(f, str) else f.get("title", str(f)))
        metric = item.get("outcomeMetric") or item.get("metric") or ""
        out_label = item.get("outcomeLabel") or ""
        caption = item.get("outcomeCaption") or item.get("caption") or ""
        p = doc.add_paragraph()
        set_para(p, space_before=4, space_after=10)
        add_text(p, f"{metric}  —  ", size=11, bold=True, color=NAVY)
        add_text(p, f"{out_label} — {caption}".strip(" —"), size=11, color=BODY)
    body(doc, d.get("rollup"), before=6)
    muted(doc, d.get("rollupAccent", ""))
    page_break(doc)

    # One record
    o = home["oneRecord"]
    section_banner(doc, "PART A", "05  Home / One Shared Record", o["headline"], o["badge"])
    body(doc, o.get("subtitle"))
    flow = o.get("flow") or []
    if flow and isinstance(flow[0], dict):
        flow_text = "  →  ".join(x.get("label") or x.get("title") or str(x) for x in flow)
    else:
        flow_text = "  →  ".join(str(x) for x in flow)
    p = doc.add_paragraph()
    set_para(p, space_after=10)
    add_text(p, flow_text, size=10, bold=True, color=TEAL)
    heading(doc, o.get("cardLabel", ""), 3)
    body(doc, o.get("wedge"))
    muted(doc, o.get("proof", ""))
    page_break(doc)

    # Explore
    e = home["explore"]
    section_banner(doc, "PART A", "06  Home / Explore Platform", e["headline"], e["badge"])
    heading(doc, e.get("accent", ""), 2)
    body(doc, e.get("subtitle"))
    rows = []
    for m in e.get("modules") or []:
        rows.append([m.get("name") or m.get("title", ""), m.get("description", ""), e.get("cta", "Learn More")])
    add_table(doc, ["Module", "Description", "CTA"], rows)
    page_break(doc)

    # Competitive table
    c = home["competitiveTable"]
    section_banner(doc, "PART A", "07  Home / Competitive Table", c["headline"], c["badge"])
    heading(doc, c.get("accent", ""), 2)
    body(doc, c.get("subtitle"))
    muted(doc, "Legend: " + "  ·  ".join(c.get("legend") or []))
    cols = c.get("columns") or []
    headers = ["Tool"] + [col.get("label") or col.get("id", "") for col in cols]
    rows = []
    for row in c.get("rows") or []:
        ratings = row.get("ratings") or row.get("scores") or {}
        cells = [row.get("name") or row.get("tool") or row.get("id", "")]
        for col in cols:
            key = col.get("id")
            val = ratings.get(key, "") if isinstance(ratings, dict) else ""
            cells.append(RATING_LABELS.get(val, val))
        # fallback if ratings stored as list aligned to columns
        if not isinstance(ratings, dict) and isinstance(row.get("ratings"), list):
            cells = [row.get("name") or row.get("tool", "")] + [
                RATING_LABELS.get(v, v) for v in row["ratings"]
            ]
        rows.append(cells)
    add_table(doc, headers, rows, highlight_last=True)
    page_break(doc)

    # Case study
    cs = home["caseStudy"]
    lines = cs.get("headlineLines") or [cs.get("headline", "Case Study")]
    section_banner(doc, "PART A", "08  Home / Case Study", lines[0], cs.get("badge"))
    if len(lines) > 1:
        heading(doc, lines[1], 2)
    body(doc, cs.get("subtitle"))
    muted(doc, cs.get("meta", ""))
    for block_key in ("who", "before", "after"):
        block = cs.get(block_key) or {}
        heading(doc, block.get("label") or block_key.title(), 3)
        body(doc, block.get("copy") or block.get("description", ""))
    quote = cs.get("quote") or {}
    if isinstance(quote, dict):
        body(doc, f'"{quote.get("quote", "")}"', italic=True)
        muted(doc, f"— {quote.get('name', '')}, {quote.get('role', '')}, {quote.get('company', '')}")
    rows = []
    for m in cs.get("metrics") or []:
        rows.append([m.get("value", ""), f"{m.get('title', '')} — {m.get('caption', '')}"])
    add_table(doc, ["Metric", "Result"], rows)
    for t in cs.get("ctas") or []:
        cta(doc, t)
    muted(doc, cs.get("footnote", ""))
    page_break(doc)

    # Calculator
    calc = home["calculator"]
    section_banner(doc, "PART A", "09  Home / Financial Calculator", calc["headline"], calc["badge"])
    heading(doc, calc.get("accent", ""), 2)
    body(doc, calc.get("subtitle"))
    muted(doc, calc.get("bridge", ""))
    heading(doc, "Inputs", 3)
    inputs = calc.get("inputs") or {}
    if isinstance(inputs, dict):
        add_table(doc, ["Field", "Label"], [[k, v] for k, v in inputs.items()])
    heading(doc, calc.get("resultsLabel") or "Results", 3)
    bullet(doc, calc.get("primary", ""), bold_prefix="Primary: ")
    muted(doc, calc.get("primarySub", ""))
    for label in calc.get("resultLabels") or []:
        bullet(doc, label)
    trust = calc.get("trust") or ""
    rate = int((calc.get("recoveryRate") or 0.7) * 100)
    if "70%" not in trust and "{rate}" not in trust:
        trust = f"{trust} Firms typically recover {rate}% of leaked billable time."
    else:
        trust = trust.replace("{rate}", f"{rate}%")
    body(doc, trust)
    cta(doc, calc.get("cta"))
    page_break(doc)

    # Home pricing teaser uses same as pricing — skip duplicate; testimonials/faq/contact/footer
    t = home["testimonials"]
    section_banner(doc, "PART A", "10  Home / Testimonials", t["title"], "Customer voices")
    body(doc, t.get("subtitle"))
    for item in t.get("items") or []:
        heading(doc, item.get("name", ""), 3)
        muted(doc, f"{item.get('role', '')} · {item.get('company', '')}", after=4)
        body(doc, f'"{item.get("quote") or item.get("text", "")}"', italic=True)
    page_break(doc)

    f = home["faq"]
    section_banner(doc, "PART A", "11  Home / FAQ", "Your Questions, Answered", "FAQ")
    body(doc, f.get("subtitle"))
    heading(doc, "Trust items", 3)
    for item in f.get("trust") or []:
        bullet(doc, f"{item.get('title', '')} — {item.get('description') or item.get('body', '')}")
    heading(doc, "Questions & answers", 3)
    faq_block(doc, f.get("items") or [])
    page_break(doc)

    contact = home["contact"]
    section_banner(doc, "PART A", "12  Home / Contact", contact["title"], contact.get("badge"))
    body(doc, contact.get("subtitle"))
    p = doc.add_paragraph()
    set_para(p, space_after=8)
    add_text(p, contact.get("outcome", ""), size=11, bold=True, color=TEAL)
    add_table(
        doc,
        ["Label", "Placeholder"],
        [[x.get("label", ""), x.get("placeholder", "")] for x in contact.get("fields") or []],
    )
    cta(doc, contact.get("submit"))
    muted(doc, contact.get("privacy", ""))
    add_table(
        doc,
        ["Channel", "Detail"],
        [[x.get("label", ""), x.get("value", "")] for x in contact.get("channels") or []],
    )
    page_break(doc)

    foot = home["footer"]
    section_banner(doc, "PART A", "13  Home / Footer", "Footer", "Site footer")
    body(doc, foot.get("tagline"))
    social = foot.get("social") or []
    if social:
        muted(doc, "Social: " + "  ·  ".join(x.get("label") or x.get("name", "") for x in social))
    for col in foot.get("columns") or []:
        heading(doc, col.get("title", ""), 3)
        for link in col.get("links") or []:
            bullet(doc, link.get("label") or link.get("title") or str(link))
    heading(doc, foot.get("newsletterTitle") or "Newsletter", 3)
    muted(doc, foot.get("newsletterSubtitle", ""))
    badges = foot.get("badges") or []
    if badges:
        bullet(doc, "  ·  ".join(b if isinstance(b, str) else b.get("label", str(b)) for b in badges))
    legal = foot.get("legal") or []
    if legal:
        bullet(doc, "  ·  ".join(x.get("label", str(x)) for x in legal))
    muted(doc, foot.get("copyright", ""))


def build_use_cases(doc, use_cases):
    order = [
        ("projectManagers", "PART B · 01"),
        ("principalsOwners", "PART B · 02"),
        ("operationsLeaders", "PART B · 03"),
        ("accountantsCfos", "PART B · 04"),
    ]
    for key, label in order:
        use_case_page(doc, use_cases[key], label)
        page_break(doc)


def build_resources(doc, resources):
    hero = resources["hero"]
    section_banner(doc, "PART C", "Resources Hub", hero["title"], hero.get("badge"), "/resources")
    body(doc, hero.get("subtitle"))
    links = resources.get("links") or []
    add_table(
        doc,
        ["Tab", "Description", "Route"],
        [
            [
                x.get("label", ""),
                x.get("description", ""),
                x.get("href", ""),
            ]
            for x in links
        ],
    )
    page_break(doc)

    intros = resources.get("intros") or {}

    # Blog
    blog_intro = intros.get("blog") or {}
    section_banner(
        doc,
        "PART C",
        "Resources / Blog",
        blog_intro.get("title") or "Blog",
        blog_intro.get("eyebrow") or "Blog",
        "/resources/blog",
    )
    body(doc, blog_intro.get("intro") or blog_intro.get("subtitle", ""))
    for post in resources.get("blog") or []:
        heading(doc, post.get("title", ""), 2)
        muted(doc, post.get("category") or post.get("tag", ""), after=4)
        body(doc, post.get("summary") or post.get("excerpt", ""))
        for para in post.get("body") or post.get("paragraphs") or []:
            if isinstance(para, str):
                bullet(doc, para)
            else:
                bullet(doc, para.get("text", str(para)))
    page_break(doc)

    # Case studies
    cs_intro = intros.get("case-studies") or intros.get("caseStudies") or {}
    section_banner(
        doc,
        "PART C",
        "Resources / Case Studies",
        cs_intro.get("title") or "Case Studies",
        cs_intro.get("eyebrow") or "Case studies",
        "/resources/case-studies",
    )
    body(doc, cs_intro.get("intro") or cs_intro.get("subtitle", ""))
    for study in resources.get("caseStudies") or []:
        heading(doc, study.get("headline") or study.get("title", ""), 2)
        muted(doc, study.get("firmType") or study.get("firm") or study.get("meta", ""), after=4)
        if study.get("challenge"):
            heading(doc, "Challenge", 3)
            body(doc, study["challenge"])
        if study.get("approach"):
            heading(doc, "Approach", 3)
            for a in study["approach"]:
                bullet(doc, a)
        if study.get("outcomes"):
            heading(doc, "Outcomes", 3)
            for o in study["outcomes"]:
                bullet(doc, o)
    page_break(doc)

    # Videos
    v_intro = intros.get("videos") or {}
    section_banner(
        doc,
        "PART C",
        "Resources / Videos",
        v_intro.get("title") or "Videos",
        v_intro.get("eyebrow") or "Videos",
        "/resources/videos",
    )
    body(doc, v_intro.get("intro") or v_intro.get("subtitle", ""))
    rows = []
    for v in resources.get("videos") or []:
        modules = v.get("modules") or v.get("moduleLabels") or []
        if isinstance(modules, list):
            modules = ", ".join(m if isinstance(m, str) else m.get("label", str(m)) for m in modules)
        rows.append([v.get("title", ""), v.get("description") or v.get("summary", ""), modules])
    add_table(doc, ["Video", "Description", "Modules"], rows)
    page_break(doc)

    # Docs
    d_intro = intros.get("documentation") or {}
    section_banner(
        doc,
        "PART C",
        "Resources / Documentation",
        d_intro.get("title") or "Documentation",
        d_intro.get("eyebrow") or "Documentation",
        "/resources/documentation",
    )
    body(doc, d_intro.get("intro") or d_intro.get("subtitle", ""))
    for section in resources.get("docs") or []:
        heading(doc, section.get("title", ""), 2)
        body(doc, section.get("description") or section.get("intro", ""))
        for item in section.get("items") or section.get("guides") or []:
            if isinstance(item, str):
                bullet(doc, item)
            else:
                bullet(doc, item.get("description") or item.get("body", ""), bold_prefix=f"{item.get('title', '')}: ")
    page_break(doc)

    # Benefits
    b_intro = intros.get("benefits") or {}
    section_banner(
        doc,
        "PART C",
        "Resources / Benefits",
        b_intro.get("title") or "Benefits",
        b_intro.get("eyebrow") or "Benefits",
        "/resources/benefits",
    )
    body(doc, b_intro.get("intro") or b_intro.get("subtitle", ""))
    for group in resources.get("benefits") or []:
        heading(doc, group.get("title", ""), 2)
        body(doc, group.get("description") or group.get("intro", ""))
        for item in group.get("items") or group.get("benefits") or []:
            if isinstance(item, str):
                bullet(doc, item)
            else:
                bullet(doc, item.get("description") or item.get("body", ""), bold_prefix=f"{item.get('title', '')}: ")
    page_break(doc)

    # Competitive comparisons
    section_banner(
        doc,
        "PART C",
        "Resources / Competitive Comparisons",
        "Industry Head-to-Head Comparison",
        "Competitive Comparisons",
        "/resources/competitive-comparisons",
    )
    for comp in resources.get("competitiveComparisons") or []:
        heading(doc, comp.get("name") or comp.get("competitor", ""), 2)
        muted(doc, comp.get("category", ""), after=4)
        body(doc, comp.get("tagline") or comp.get("subtitle", ""))
        if comp.get("competitorBestFor"):
            body(doc, f"{comp.get('name', 'Competitor')} is best for: {comp['competitorBestFor']}")
        if comp.get("avyroBestFor"):
            body(doc, f"Avyro is best for: {comp['avyroBestFor']}")
        scores = comp.get("scores") or []
        if scores:
            add_table(
                doc,
                ["Category", "Score"],
                [
                    [
                        s.get("label") or s.get("category", ""),
                        f"{s.get('score', '')}/{s.get('maxScore', 5)}",
                    ]
                    for s in scores
                ],
            )
        if comp.get("executiveVerdict") or comp.get("verdict"):
            heading(doc, "Executive verdict", 3)
            body(doc, comp.get("executiveVerdict") or comp.get("verdict"))
        strengths = comp.get("strengths") or []
        if strengths:
            heading(doc, "What they do well", 3)
            for s in strengths:
                bullet(doc, s)
        frictions = comp.get("frictions") or []
        if frictions:
            heading(doc, "Frictions & failures", 3)
            for s in frictions:
                bullet(doc, s)
        matrix = comp.get("matrix") or []
        if matrix:
            heading(doc, "Detailed matrix", 3)
            rows = []
            for row in matrix:
                winner = row.get("winner") or ""
                if winner == "avyro":
                    winner = "Avyro Win"
                elif winner == "tie":
                    winner = "Tie"
                elif winner == "competitor":
                    winner = f"{comp.get('name', 'Competitor')} Win"
                rows.append(
                    [
                        row.get("title") or row.get("category", ""),
                        winner,
                        row.get("avyroDescription") or "",
                        row.get("competitorDescription") or "",
                    ]
                )
            add_table(doc, ["Workflow", "Winner", "Avyro", "Competitor"], rows)
        page_break(doc)


def build_products(doc, products):
    platform = products["platform"]
    section_banner(
        doc,
        "PART D",
        "Platform",
        platform["headline"],
        platform.get("category"),
        products.get("routes", {}).get("platform", "/products/platform"),
    )
    body(doc, platform.get("subtitle"))
    cta(doc, "See the full workflow")
    for mod in platform.get("modules") or []:
        heading(doc, mod.get("title", ""), 2)
        muted(doc, mod.get("tagline", ""), after=4)
        body(doc, mod.get("description", ""))
        for point in mod.get("points") or []:
            bullet(doc, point)
    wf = platform.get("workflow") or {}
    if wf:
        heading(doc, wf.get("title") or "Workflow", 2)
        muted(doc, wf.get("eyebrow", ""))
        body(doc, wf.get("body", ""))
        flow = wf.get("flow") or []
        if flow:
            p = doc.add_paragraph()
            set_para(p, space_after=8)
            add_text(p, "  →  ".join(flow), size=10, bold=True, color=TEAL)
    partners = products.get("integrations") or []
    if partners:
        heading(doc, "Integration partners", 3)
        add_table(
            doc,
            ["Partner", "Description"],
            [[p.get("name", ""), p.get("description") or p.get("category", "")] for p in partners],
        )
    page_break(doc)

    # Feature pages
    for fid, feature in (products.get("features") or {}).items():
        route = products.get("routes", {}).get(fid, f"/products/{fid}")
        headline = feature.get("headline") or ""
        accent = feature.get("headlineAccent") or ""
        section_banner(
            doc,
            "PART D",
            f"Feature / {fid}",
            f"{headline} {accent}".strip(),
            feature.get("eyebrow") or "Feature",
            route,
        )
        body(doc, feature.get("subtitle", ""))
        if feature.get("pullQuote"):
            body(doc, f'"{feature["pullQuote"]}"', italic=True)
        cta(doc, feature.get("heroCta"))
        cta(doc, feature.get("secondaryCta"))

        heading(doc, feature.get("problemTitle") or "Problem", 2)
        body(doc, feature.get("problemIntro", ""))
        for item in feature.get("problems") or []:
            if isinstance(item, str):
                bullet(doc, item)
            else:
                bullet(doc, item.get("description") or item.get("body", ""), bold_prefix=f"{item.get('title', '')}: ")

        heading(doc, feature.get("stepsTitle") or "How it works", 2)
        muted(doc, feature.get("stepsEyebrow", ""))
        for i, step in enumerate(feature.get("steps") or [], 1):
            if isinstance(step, str):
                bullet(doc, step, bold_prefix=f"{i}. ")
            else:
                bullet(
                    doc,
                    step.get("description") or step.get("body", ""),
                    bold_prefix=f"{i}. {step.get('title', '')}: ",
                )

        heading(doc, feature.get("capabilitiesTitle") or "Capabilities", 2)
        muted(doc, feature.get("capabilitiesEyebrow", ""))
        body(doc, feature.get("capabilitiesIntro", ""))
        for item in feature.get("capabilities") or []:
            if isinstance(item, str):
                bullet(doc, item)
            else:
                bullet(doc, item.get("description") or item.get("body", ""), bold_prefix=f"{item.get('title', '')}: ")

        if feature.get("outcomes"):
            heading(doc, "In action / outcomes", 2)
            for o in feature["outcomes"]:
                if isinstance(o, str):
                    bullet(doc, o)
                else:
                    bullet(doc, o.get("description") or o.get("body", ""), bold_prefix=f"{o.get('title', '')}: ")

        heading(doc, feature.get("workflowTitle") or "Connected workflow", 2)
        body(doc, feature.get("workflowBody", ""))
        flow = feature.get("workflowFlow") or []
        if flow:
            p = doc.add_paragraph()
            set_para(p, space_after=8)
            add_text(p, "  →  ".join(flow), size=10, bold=True, color=TEAL)

        faq_block(doc, feature.get("faqs") or [])
        related = feature.get("related") or []
        if related:
            heading(doc, "Explore related modules", 3)
            for r in related:
                bullet(doc, r if isinstance(r, str) else r.get("label") or r.get("title", str(r)))
        page_break(doc)

    # Product modules
    labels = products.get("labels") or {}
    for mid, page in (products.get("modules") or {}).items():
        route = products.get("routes", {}).get(mid, f"/products/{mid}")
        section_banner(
            doc,
            "PART D",
            f"Module / {labels.get(mid) or mid}",
            page.get("headline", ""),
            page.get("category"),
            route,
        )
        body(doc, page.get("subtitle", ""))
        heading(doc, "Sound familiar?", 2)
        for pain in page.get("pains") or []:
            bullet(doc, pain)
        heading(doc, page.get("featuresTitle") or "In practice", 2)
        muted(doc, page.get("featuresEyebrow", ""))
        body(doc, page.get("featuresIntro", ""))
        for feat in page.get("features") or []:
            bullet(doc, feat.get("description", ""), bold_prefix=f"{feat.get('title', '')}: ")
        wf = page.get("workflow") or {}
        if wf:
            heading(doc, wf.get("title") or "Workflow", 2)
            muted(doc, wf.get("eyebrow", ""))
            body(doc, wf.get("body", ""))
            if wf.get("flow"):
                p = doc.add_paragraph()
                set_para(p, space_after=8)
                add_text(p, "  →  ".join(wf["flow"]), size=10, bold=True, color=TEAL)
        faq_block(doc, page.get("faqs") or [])
        related = page.get("relatedIds") or []
        if related:
            heading(doc, "Works well with", 3)
            for r in related:
                bullet(doc, labels.get(r, r))
        page_break(doc)


def build_industries(doc, industries):
    labels = industries.get("labels") or {}
    pages = industries.get("pages") or industries
    if "pages" in industries:
        pages = industries["pages"]
    for iid, page in pages.items():
        if not isinstance(page, dict) or "headline" not in page:
            continue
        section_banner(
            doc,
            "PART E",
            f"Industry / {labels.get(iid) or iid}",
            page.get("headline", ""),
            page.get("eyebrow"),
            f"/industry/{iid}",
        )
        body(doc, page.get("subtitle", ""))
        if page.get("pullQuote"):
            body(doc, f'"{page["pullQuote"]}"', italic=True)
        heading(doc, page.get("contextTitle") or "Context", 2)
        body(doc, page.get("contextBody") or page.get("context", ""))
        pressures = page.get("pressures") or []
        if pressures:
            heading(doc, "Where firms feel it", 2)
            for p in pressures:
                if isinstance(p, str):
                    bullet(doc, p)
                else:
                    bullet(doc, p.get("description") or p.get("body", ""), bold_prefix=f"{p.get('title', '')}: ")
        caps = page.get("capabilities") or []
        if caps:
            heading(doc, "How Avyro fits", 2)
            for i, cap in enumerate(caps, 1):
                if isinstance(cap, str):
                    bullet(doc, cap, bold_prefix=f"{i}. ")
                else:
                    mods = cap.get("modules") or cap.get("moduleLabels") or []
                    if isinstance(mods, list):
                        mods = ", ".join(m if isinstance(m, str) else m.get("label", str(m)) for m in mods)
                    bullet(
                        doc,
                        f"{cap.get('description') or cap.get('body', '')} Modules: {mods}",
                        bold_prefix=f"{i}. {cap.get('title', '')}: ",
                    )
        modules = page.get("moduleLinks") or page.get("modules") or []
        if modules:
            heading(doc, "Modules that matter most", 3)
            for m in modules:
                bullet(doc, m if isinstance(m, str) else m.get("label") or m.get("title", str(m)))
        outcomes = page.get("outcomes") or []
        if outcomes:
            heading(doc, "What changes", 2)
            for o in outcomes:
                if isinstance(o, str):
                    bullet(doc, o)
                else:
                    bullet(doc, o.get("description") or o.get("body", ""), bold_prefix=f"{o.get('title', '')}: ")
        faq_block(doc, page.get("faqs") or [])
        related = page.get("relatedIds") or page.get("related") or []
        if related:
            heading(doc, "Other AEC industries", 3)
            for r in related:
                key = r if isinstance(r, str) else r.get("id") or r.get("label", str(r))
                bullet(doc, labels.get(key, key))
        page_break(doc)


def build_pricing(doc, pricing):
    hero = pricing.get("hero") or {}
    section_banner(
        doc,
        "PART F",
        "Pricing",
        hero.get("title") or "Plans that scale with your firm",
        hero.get("eyebrow") or "Pricing",
        "/pricing",
    )
    body(doc, hero.get("subtitle", ""))
    for tier in pricing.get("tiers") or []:
        badge_txt = f"  ·  {tier['badge']}" if tier.get("badge") else ""
        popular = (
            "  ·  Most popular"
            if tier.get("popular")
            or tier.get("id") in {"full", "full-suite", "fullSuite"}
            or (tier.get("name") or "").lower().startswith("full")
            else ""
        )
        price = tier.get("price") or ""
        unit = tier.get("priceUnit") or tier.get("unit") or "per user / month"
        heading(doc, f"{tier.get('name') or tier.get('title', '')} — {price} {unit}{badge_txt}{popular}", 2)
        body(doc, tier.get("tagline") or tier.get("description", ""))
        for m in tier.get("modules") or []:
            bullet(doc, m if isinstance(m, str) else m.get("label") or m.get("title", str(m)))
        cta(doc, tier.get("ctaLabel") or tier.get("cta"))
    muted(doc, pricing.get("disclaimer", ""))

    all_modules = pricing.get("allModules") or []
    starter = set(pricing.get("starterModules") or [])
    if all_modules:
        heading(doc, "Compare modules", 2)
        rows = []
        for mod in all_modules:
            name = mod if isinstance(mod, str) else mod.get("label") or mod.get("name", str(mod))
            key = mod if isinstance(mod, str) else mod.get("id") or name
            in_starter = key in starter or name in starter
            rows.append([name, "✓" if in_starter else "—", "✓", "Pick / Add-on"])
        add_table(doc, ["Module", "Starter", "Full Suite", "Custom"], rows)

    heading(doc, "Common questions", 2)
    faq_block(doc, pricing.get("faqs") or [])


def setup_doc():
    doc = Document()
    section = doc.sections[0]
    section.page_width = Inches(8.5)
    section.page_height = Inches(11)
    section.left_margin = Inches(0.8)
    section.right_margin = Inches(0.8)
    section.top_margin = Inches(0.7)
    section.bottom_margin = Inches(0.7)

    style = doc.styles["Normal"]
    style.font.name = "Calibri"
    style.font.size = Pt(11)
    style.font.color.rgb = BODY

    hp = section.header.paragraphs[0]
    hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    add_text(hp, "Avyro  ·  Full Site Content", size=8, color=MUTED)

    fp = section.footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    add_text(fp, "Page ", size=8, color=MUTED)
    fld1 = OxmlElement("w:fldChar")
    fld1.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText")
    instr.set(qn("xml:space"), "preserve")
    instr.text = " PAGE "
    fld2 = OxmlElement("w:fldChar")
    fld2.set(qn("w:fldCharType"), "end")
    run = fp.add_run()
    set_run(run, size=8, color=MUTED)
    run._r.append(fld1)
    run._r.append(instr)
    run._r.append(fld2)
    add_text(fp, "  ·  Confidential", size=8, color=MUTED)
    return doc


def main():
    if not JSON_PATH.exists():
        raise SystemExit(f"Missing {JSON_PATH}. Run: npm run export:content")
    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    doc = setup_doc()
    build_cover(doc, data)
    page_break(doc)
    build_home(doc, data["home"])
    page_break(doc)
    build_use_cases(doc, data["useCases"])
    build_resources(doc, data["resources"])
    build_products(doc, data["products"])
    build_industries(doc, data["industries"])
    build_pricing(doc, data["pricing"])
    doc.save(OUT_PATH)
    print(f"Created: {OUT_PATH}")


if __name__ == "__main__":
    main()
