"""Generate a page-wise, styled DOCX of Avyro homepage content."""

from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn, nsdecls
from docx.oxml import parse_xml
from docx.shared import Cm, Inches, Pt, RGBColor, Twips
from pathlib import Path

# Brand palette — cool slate + teal accent (aligned, professional AEC look)
NAVY = RGBColor(0x0F, 0x1F, 0x2E)
SLATE = RGBColor(0x2C, 0x3E, 0x50)
BODY = RGBColor(0x3D, 0x4A, 0x57)
MUTED = RGBColor(0x6B, 0x78, 0x86)
TEAL = RGBColor(0x0D, 0x7A, 0x7A)
TEAL_SOFT = "E6F4F4"
LIGHT_BG = "F4F7F8"
RULE = "D0D8DE"
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
ACCENT_ROW = "0D7A7A"


def set_run(run, *, size=11, bold=False, color=BODY, font="Calibri", italic=False):
    run.font.name = font
    run._element.rPr.rFonts.set(qn("w:eastAsia"), font)
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.italic = italic
    run.font.color.rgb = color


def set_para(p, *, space_before=0, space_after=8, align=WD_ALIGN_PARAGRAPH.LEFT, line=1.15):
    pf = p.paragraph_format
    pf.space_before = Pt(space_before)
    pf.space_after = Pt(space_after)
    pf.alignment = align
    pf.line_spacing = line


def add_text(p, text, **kwargs):
    run = p.add_run(text)
    set_run(run, **kwargs)
    return run


def heading(doc, text, level=1):
    p = doc.add_paragraph()
    set_para(p, space_before=0, space_after=10 if level == 1 else 6)
    if level == 1:
        add_text(p, text, size=22, bold=True, color=NAVY, font="Calibri Light")
    elif level == 2:
        add_text(p, text, size=14, bold=True, color=SLATE, font="Calibri")
    else:
        add_text(p, text, size=12, bold=True, color=TEAL, font="Calibri")
    return p


def badge(doc, text):
    p = doc.add_paragraph()
    set_para(p, space_before=0, space_after=6)
    add_text(p, text.upper(), size=9, bold=True, color=TEAL, font="Calibri")
    return p


def body(doc, text, *, after=8, before=0, italic=False):
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
    set_para(p, space_before=0, space_after=4)
    if bold_prefix:
        add_text(p, bold_prefix, size=11, bold=True, color=SLATE)
        add_text(p, text, size=11, color=BODY)
    else:
        add_text(p, text, size=11, color=BODY)
    return p


def cta(doc, text):
    p = doc.add_paragraph()
    set_para(p, space_before=6, space_after=4)
    add_text(p, "→  " + text, size=11, bold=True, color=TEAL)
    return p


def divider(doc):
    p = doc.add_paragraph()
    set_para(p, space_before=4, space_after=10)
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "12")
    bottom.set(qn("w:space"), "1")
    bottom.set(qn("w:color"), "0D7A7A")
    pBdr.append(bottom)
    pPr.append(pBdr)
    return p


def page_break(doc):
    doc.add_page_break()


def set_cell_shading(cell, hex_color):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), hex_color)
    shd.set(qn("w:val"), "clear")
    tcPr.append(shd)


def set_cell_margins(cell, top=40, bottom=40, left=80, right=80):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcMar = OxmlElement("w:tcMar")
    for edge, val in (("top", top), ("bottom", bottom), ("left", left), ("right", right)):
        node = OxmlElement(f"w:{edge}")
        node.set(qn("w:w"), str(val))
        node.set(qn("w:type"), "dxa")
        tcMar.append(node)
    tcPr.append(tcMar)


def style_table(table, header=True, highlight_last=False):
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = True
    for r_idx, row in enumerate(table.rows):
        for c_idx, cell in enumerate(row.cells):
            set_cell_margins(cell)
            for p in cell.paragraphs:
                set_para(p, space_before=2, space_after=2)
                for run in p.runs:
                    run.font.name = "Calibri"
                    run.font.size = Pt(9 if header and r_idx == 0 else 10)
            if header and r_idx == 0:
                set_cell_shading(cell, "0F1F2E")
                for p in cell.paragraphs:
                    for run in p.runs:
                        run.font.bold = True
                        run.font.color.rgb = WHITE
                        run.font.size = Pt(9)
            elif highlight_last and r_idx == len(table.rows) - 1:
                set_cell_shading(cell, TEAL_SOFT)
                for p in cell.paragraphs:
                    for run in p.runs:
                        run.font.bold = True
                        run.font.color.rgb = NAVY
            elif r_idx % 2 == 1:
                set_cell_shading(cell, LIGHT_BG)


def add_table(doc, headers, rows, *, highlight_last=False):
    table = doc.add_table(rows=1 + len(rows), cols=len(headers))
    table.style = "Table Grid"
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
            add_text(p, str(val), size=10, color=BODY)
    style_table(table, header=True, highlight_last=highlight_last)
    doc.add_paragraph()
    return table


def section_header_block(doc, page_no, section_title, badge_text=None):
    # Page label strip
    p = doc.add_paragraph()
    set_para(p, space_before=0, space_after=2)
    add_text(p, f"HOME PAGE  ·  SECTION {page_no:02d}", size=8, bold=True, color=MUTED)
    if badge_text:
        badge(doc, badge_text)
    heading(doc, section_title, 1)
    divider(doc)


def cover_page(doc):
    for _ in range(4):
        doc.add_paragraph()
    p = doc.add_paragraph()
    set_para(p, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=6)
    add_text(p, "AVYRO", size=36, bold=True, color=NAVY, font="Calibri Light")

    p = doc.add_paragraph()
    set_para(p, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=18)
    add_text(p, "Homepage Content Document", size=18, color=TEAL, font="Calibri Light")

    divider(doc)

    p = doc.add_paragraph()
    set_para(p, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=12, space_after=8)
    add_text(
        p,
        "Complete, page-wise copy of the Avyro landing page —\n"
        "organized by section for review, alignment, and production use.",
        size=11,
        color=BODY,
    )

    p = doc.add_paragraph()
    set_para(p, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=24, space_after=4)
    add_text(p, "Structure", size=12, bold=True, color=SLATE)

    sections = [
        "01  Hero",
        "02  Revenue Leaks",
        "03  The Solution",
        "04  Why Firms Run Better (Do & Outcome)",
        "05  One Shared Record",
        "06  Explore the Platform",
        "07  Competitive Comparison",
        "08  Case Study",
        "09  Financial Calculator",
        "10  Pricing",
        "11  Testimonials",
        "12  FAQ",
        "13  Contact Us",
        "14  Footer",
    ]
    for s in sections:
        p = doc.add_paragraph()
        set_para(p, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=2)
        add_text(p, s, size=10, color=MUTED)

    p = doc.add_paragraph()
    set_para(p, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=28)
    add_text(p, "Avyro Technologies  ·  Confidential content export", size=9, color=MUTED)


def toc_page(doc):
    section_header_block(doc, 0, "Contents", "Overview")
    body(
        doc,
        "Each following page mirrors one homepage section, in scroll order. "
        "Headlines, body copy, CTAs, tables, and supporting details are included exactly as they appear on the site.",
    )
    items = [
        ("01", "Hero", "Brand positioning, lead capture, trust metrics"),
        ("02", "Revenue Leaks", "Cost of disconnected operations"),
        ("03", "The Solution", "Why the leak exists between tools"),
        ("04", "Do & Outcome", "Six stages — what changes for the firm"),
        ("05", "One Shared Record", "What makes Avyro different"),
        ("06", "Explore Platform", "Product modules"),
        ("07", "Competitive Table", "Feature coverage vs point tools"),
        ("08", "Case Study", "fivD outcomes"),
        ("09", "Financial Calculator", "Firm-sized leak estimate"),
        ("10", "Pricing", "Starter, Full Suite, Custom"),
        ("11", "Testimonials", "Customer voices"),
        ("12", "FAQ", "Common questions"),
        ("13", "Contact Us", "Form & channels"),
        ("14", "Footer", "Links, newsletter, legal"),
    ]
    headers = ["#", "Section", "Focus"]
    rows = [[a, b, c] for a, b, c in items]
    add_table(doc, headers, rows)


def page_hero(doc):
    section_header_block(doc, 1, "Hero", "The operating system for AEC firms")
    heading(doc, "Built for the Way Modern AEC Firms Actually Operate.", 2)
    body(
        doc,
        "Run your entire AEC firm with complete visibility and operational control. "
        "Every department works from the same operational foundation, so projects move faster, "
        "teams stay aligned, and revenue no longer slips through the gaps.",
    )
    heading(doc, "Lead capture", 3)
    bullet(doc, "Work email — placeholder: Enter your work email", bold_prefix="Field: ")
    cta(doc, "Book a Demo")
    muted(doc, "Success: Thanks — we'll be in touch shortly.")
    cta(doc, "Or calculate your firm's uncaptured revenue")

    heading(doc, "Trust bar", 3)
    add_table(
        doc,
        ["Metric", "Meaning"],
        [
            ["Trusted by", "fivD"],
            ["10+ hrs", "recovered per person, every week"],
            ["1.8×", "faster time to payment"],
            ["15%+", "utilization gained"],
        ],
    )


def page_revenue_leaks(doc):
    section_header_block(doc, 2, "Revenue Leaks", "The cost of disconnected operations")
    heading(doc, "Where a 50-person firm loses ~$1.5M a year.", 2)
    body(
        doc,
        "Not fraud. Not bad clients. Just under-utilization, missed billing, and the tools meant to prevent both — working against each other.",
    )
    add_table(
        doc,
        ["Figure", "Title", "Description", "Why"],
        [
            [
                "$680K",
                "Lost to under-utilization",
                "Industry average is 59%. Healthy is 70%. That 11-point gap is ~5,500 unbilled hours a year at $125/hr.",
                "Utilization lives in spreadsheets and shows up monthly — after the hours are already gone.",
            ],
            [
                "$680–850K",
                "Lost to under-invoicing",
                "8–10% of project value never reaches an invoice — untracked tasks, missed change orders, time that never gets billed.",
                "Time, scope, and billing sit in separate tools, so they drift apart within weeks.",
            ],
            [
                "$120K",
                "Spent on the tools causing it",
                "Typical annual spend across CRM, resourcing, time, and billing — usually 4 to 6 disconnected products.",
                "Enterprise prices. No enterprise outcomes. Pure overhead.",
            ],
        ],
    )
    p = doc.add_paragraph()
    set_para(p, space_after=10)
    add_text(p, "Total: ", size=12, bold=True, color=NAVY)
    add_text(p, "~$1.5M / year for a typical 50-person firm", size=12, bold=True, color=TEAL)

    body(doc, "The question isn't how much you're losing. It's why.")
    cta(doc, "See what this costs your firm")
    cta(doc, "See how Avyro stops it")


def page_solution(doc):
    section_header_block(doc, 3, "The Solution", "Real problem")
    heading(doc, "The revenue leak doesn't happen inside your tools.", 2)
    heading(doc, "It happens between them.", 2)
    body(doc, "Every project follows the same business journey—from winning work to getting paid.")

    heading(doc, "Business journey", 3)
    steps = [
        "Business Development — wins the work",
        "Project Managers — plan it",
        "Teams — execute it",
        "Finance — bills it",
        "Leadership — measures it",
    ]
    for i, s in enumerate(steps, 1):
        bullet(doc, s, bold_prefix=f"{i}. ")

    body(doc, "But in most firms, every team works in a different system.", before=8)
    body(
        doc,
        "Every handoff means re-entering data, updating spreadsheets, sending emails, and hoping nothing gets missed.",
    )

    heading(doc, "Consequences", 3)
    for line in [
        "That's where utilization falls.",
        "That's where billable work disappears.",
        "That's where invoices become incomplete.",
        "That's where leadership loses visibility.",
    ]:
        bullet(doc, line)

    body(
        doc,
        "The problem isn't your CRM, your timesheet software, or your billing system. It's the gaps between them.",
        before=8,
    )
    cta(doc, "See why firms run better with Avyro")


def page_do_outcome(doc):
    section_header_block(doc, 4, "Why Firms Run Better with Avyro", "Do & outcome")
    heading(doc, "One platform built for how firms operate.", 2)
    heading(doc, "Visibility. Control. Better decisions.", 2)
    body(
        doc,
        "Most tools optimize a department. Avyro helps AEC firms run the whole business — so every team executes with clarity, "
        "every handoff stays intact, and leadership decides with full control. The capabilities below are proof of that one idea.",
    )
    muted(doc, "Columns: How this stage improves  ·  What the firm gains")

    items = [
        (
            "01 — Win New Business",
            "Start every project ready to deliver.",
            "Avyro keeps pursuits, proposals, and clients on one record. A signed deal becomes a live project with contacts and budget already in place.",
            ["No duplicate setup", "Connected proposals", "Live pipeline visibility"],
            "50%",
            "Less pursuit admin — Half the admin when a win becomes a live job.",
        ),
        (
            "02 — Plan the Right Team",
            "Put the right people on the right work.",
            "Avyro shows live firm-wide availability. Assign the right team by skill and workload so utilization rises and idle time falls.",
            ["Live capacity across projects", "Assign by skill and load", "Catch overbooking early"],
            "15%+",
            "Higher utilization — More payroll on billable work — less idle capacity.",
        ),
        (
            "03 — Deliver Every Project",
            "Deliver from one live plan shared by everyone.",
            "Schedule, budget, and progress sit on the same project record. Teams execute with clarity; leadership spots risk while it can still be fixed.",
            ["Plan and budget together", "Scope updates stay live", "At-risk jobs surface early"],
            "−34%",
            "Fewer overruns — Spot slipping jobs early — while margin can recover.",
        ),
        (
            "04 — Capture Every Hour",
            "Capture billable work as the day happens.",
            "Avyro maps activity to the right project in real time. Teams review and approve hours — they don't rebuild the week from memory.",
            ["Hours map to projects", "Review instead of recall", "Clean effort for finance"],
            "10+ hrs",
            "Billable hours recovered weekly — Hours worked get recorded — and can be billed.",
        ),
        (
            "05 — Turn Work Into Revenue",
            "Turn completed work into revenue faster.",
            "Approved time and scope flow straight into billing. Finance invoices faster, collections stay visible, and revenue follows the work already delivered.",
            ["Invoice from approved work", "Collections stay visible", "Live project profitability"],
            "1.8×",
            "Faster payment — Invoice on approval — cash comes back sooner.",
        ),
        (
            "06 — Measure Firm Performance",
            "See the whole business in real time.",
            "Utilization, delivery, and revenue live in one leadership view. Owners decide from how the firm is running now — not last month's report.",
            ["One leadership performance view", "Overhead stays visible", "Decide on live data"],
            "100%",
            "Operational visibility — See utilization, delivery, and cost in one live view.",
        ),
    ]

    for title, do_title, do_copy, features, metric, outcome in items:
        heading(doc, title, 3)
        p = doc.add_paragraph()
        set_para(p, space_after=4)
        add_text(p, "How this stage improves: ", size=10, bold=True, color=TEAL)
        add_text(p, do_title, size=11, bold=True, color=SLATE)
        body(doc, do_copy, after=4)
        for f in features:
            bullet(doc, f)
        p = doc.add_paragraph()
        set_para(p, space_before=4, space_after=10)
        add_text(p, "What the firm gains: ", size=10, bold=True, color=TEAL)
        add_text(p, f"{metric}  —  ", size=11, bold=True, color=NAVY)
        add_text(p, outcome, size=11, color=BODY)

    p = doc.add_paragraph()
    set_para(p, space_before=6, space_after=4)
    add_text(p, "Every stage. One shared record. One operating system.", size=12, bold=True, color=NAVY)
    muted(doc, "See how the entire firm runs from a single connected workflow.")


def page_one_record(doc):
    section_header_block(doc, 5, "One Shared Record", "What makes Avyro different")
    heading(doc, "Six business stages. One shared record.", 2)
    heading(doc, "That's what makes Avyro different.", 2)
    body(doc, "Every stage shares the same business record, so information never has to be recreated or reconciled.")

    heading(doc, "Connected flow", 3)
    flow = [
        "Win New Business",
        "Plan the Right Team",
        "Deliver Every Project",
        "Capture Every Hour",
        "Turn Work Into Revenue",
        "Measure Firm Performance",
    ]
    p = doc.add_paragraph()
    set_para(p, space_after=10)
    add_text(p, "  →  ".join(flow), size=10, bold=True, color=TEAL)

    body(doc, "Every team works from the same business record, so handoffs stay connected from pursuit to payment.")
    muted(doc, "Outcomes above are from measured AEC firms using Avyro — your numbers will differ. Next: run yours.")


def page_explore(doc):
    section_header_block(doc, 6, "Explore the Platform", "Explore the platform")
    heading(doc, "Everything your firm needs.", 2)
    heading(doc, "One operating system.", 2)
    body(
        doc,
        "Avyro brings CRM, planning, delivery, time, billing, and analytics into one system built for AEC. "
        "Every module shares the same operational foundation — so the business runs as one, not as a stack of tools.",
    )
    add_table(
        doc,
        ["Module", "Description", "CTA"],
        [
            ["CRM", "Win more work with pursuits that open straight into delivery.", "Learn More"],
            ["Resource Planning", "Staff the right team before capacity and utilization slip.", "Learn More"],
            ["Project Management", "Deliver every job from one live plan, budget, and timeline.", "Learn More"],
            ["Activity Tracking", "See work as it happens — not after the week is reconstructed.", "Learn More"],
            ["Smart Timesheets", "Capture billable hours accurately with far less admin.", "Learn More"],
            ["Billing & Invoicing", "Invoice from approved work and get paid faster.", "Learn More"],
            ["Analytics", "Decide from live firm performance — not month-end reports.", "Learn More"],
            ["Approvals", "Keep sign-offs moving without bottlenecks or email chains.", "Learn More"],
        ],
    )


def page_competitive(doc):
    section_header_block(doc, 7, "Competitive Comparison", "Why Avyro")
    heading(doc, "Every point tool is strong somewhere.", 2)
    heading(doc, "Avyro is strong everywhere.", 2)
    body(
        doc,
        "Cosential wins at CRM. Deltek wins at resourcing. BQE CORE wins at timesheets. "
        "None of them do all three — and none of them bill from the same record. Avyro does.",
    )
    muted(doc, "Legend: Strong  ·  Partial  ·  Weak / none")
    add_table(
        doc,
        ["Tool", "CRM", "Resource Allocation", "Timesheets", "Billing", "AI-native", "All-in-one"],
        [
            ["Cosential", "Strong", "Weak / none", "Weak / none", "Weak / none", "Partial", "Weak / none"],
            ["Deltek", "Weak / none", "Strong", "Partial", "Partial", "Weak / none", "Partial"],
            ["BQE CORE", "Weak / none", "Weak / none", "Strong", "Partial", "Weak / none", "Partial"],
            ["Unanet", "Weak / none", "Strong", "Partial", "Partial", "Weak / none", "Partial"],
            ["Monograph", "Weak / none", "Partial", "Partial", "Weak / none", "Partial", "Weak / none"],
            ["Avyro", "Strong", "Strong", "Strong", "Strong", "Strong", "Strong"],
        ],
        highlight_last=True,
    )


def page_case_study(doc):
    section_header_block(doc, 8, "Case Study", "A firm like yours")
    heading(doc, "They ran the same leak.", 2)
    heading(doc, "Then they ran one record.", 2)
    body(
        doc,
        "One AEC firm. A few of the outcomes from What we do — measured after they connected win → time → bill on Avyro.",
    )
    add_table(
        doc,
        ["Firm", "Profile", "Role"],
        [["fivD Architecture", "~mid-size AEC", "Flagship partner"]],
    )
    heading(doc, "Who", 3)
    body(doc, "fivD Architecture — a mid-size architecture practice (~30–50 people), the same size band as the leak math and calculator defaults.")
    heading(doc, "Before", 3)
    body(doc, "CRM, time, and billing lived in separate tools. Capacity and invoices drifted — the same leak pattern as a typical 50-person firm.")
    heading(doc, "After", 3)
    body(doc, "fivD put win, delivery, timesheets, and billing on one connected record — so principal, PM, and finance work from the same truth.")

    heading(doc, "Quote", 3)
    p = doc.add_paragraph()
    set_para(p, space_after=4)
    add_text(
        p,
        '"Friday stopped being a rebuild. Hours map as work happens, and invoices go out from approved time — not from chasing spreadsheets."',
        size=11,
        italic=True,
        color=SLATE,
    )
    muted(doc, "— Gaurav Chopra, Co-Founder, fivD")

    heading(doc, "Measured outcomes", 3)
    add_table(
        doc,
        ["Metric", "Result"],
        [
            ["15%+", "Higher utilization — More payroll on billable work — less idle capacity."],
            ["10+ hrs", "Billable hours recovered weekly — Hours worked get recorded — and can be billed."],
            ["1.8×", "Faster payment — Invoice on approval — cash comes back sooner."],
        ],
    )
    cta(doc, "Book a walkthrough")
    cta(doc, "See pricing")
    muted(doc, "*Based on measured results at AEC firms using Avyro — your firm's numbers may vary.")


def page_calculator(doc):
    section_header_block(doc, 9, "Financial Calculator", "Your number")
    heading(doc, "What does the leak look like for your firm?", 2)
    heading(doc, "Run your headcount. See your dollars.", 2)
    body(
        doc,
        "Section 1 used a typical 50-person firm. Put your billable staff, rate, and uncaptured hours below — this is the same leak, sized to you.",
    )
    muted(doc, "You saw the connected record. Now see what disconnected work is costing your firm.")

    heading(doc, "Inputs — Your firm", 3)
    add_table(
        doc,
        ["Input", "Description"],
        [
            ["Billable staff", "Number of billable people"],
            ["Billable rate ($/hr)", "Average billable hourly rate"],
            ["Weekly billable hours (target)", "Target hours per person per week"],
            ["Uncaptured %", "Share of hours left uncaptured"],
        ],
    )

    heading(doc, "Results — Projected with Avyro", 3)
    bullet(doc, "Annual revenue left on the table", bold_prefix="Primary: ")
    muted(doc, "What Avyro typically recovers from uncaptured hours — directional, not a quote")
    for label in [
        "Monthly revenue recovered",
        "Billable hours recovered / year",
        "Revenue you capture today",
        "Revenue after Avyro recovery",
    ]:
        bullet(doc, label)

    body(
        doc,
        "Estimate based on typical recovery of uncaptured hours at AEC firms using Avyro — not a quote. "
        "A walkthrough will refine it. Firms typically recover 70% of leaked billable time.",
        before=6,
    )
    cta(doc, "Book a walkthrough")


def page_pricing(doc):
    section_header_block(doc, 10, "Pricing", "Pricing")
    heading(doc, "Plans that scale with your firm", 2)
    body(doc, "Per-user pricing for AEC teams. Start with core modules or run the full connected platform.")

    plans = [
        (
            "Starter — $59 per user / month",
            "CRM, time, resourcing, assets, and billing—connected.",
            [
                "AI-Powered CRM",
                "Proposal Management",
                "Activity Tracker",
                "Smart Timesheets",
                "Resource Allocation",
                "Asset Management",
                "Billing & Invoice",
            ],
            "Talk to sales",
            "",
        ),
        (
            "Full Suite — $99 per user / month",
            "Everything in Starter plus the full Platform layer.",
            [
                "All Starter modules",
                "Approval Workflows",
                "Bulk Uploader",
                "Analytics",
                "Integrations",
            ],
            "Book a demo",
            "Most popular",
        ),
        (
            "Custom Suite — From $45 per user / month",
            "Pick the modules you need and add more as you grow.",
            [
                "Any core module mix",
                "Platform add-ons optional",
                "Multi-office rollout support",
            ],
            "Get a custom quote",
            "",
        ),
    ]

    for title, tagline, modules, cta_label, tag in plans:
        label = f"{title}" + (f"  ·  {tag}" if tag else "")
        heading(doc, label, 3)
        body(doc, tagline, after=4)
        for m in modules:
            bullet(doc, m)
        cta(doc, cta_label)

    muted(doc, "Sample pricing for planning purposes. Final quotes depend on firm size, modules, and rollout scope.")


def page_testimonials(doc):
    section_header_block(doc, 11, "Testimonials", "Customer voices")
    heading(doc, "What Our Customers Say", 2)
    body(doc, "Trusted by teams building better AEC firms.")
    p = doc.add_paragraph()
    set_para(p, space_after=12)
    add_text(p, "5.0", size=16, bold=True, color=TEAL)
    add_text(p, "  from teams at FivD", size=11, color=MUTED)

    quotes = [
        (
            "Gaurav Chopra",
            "Co-Founder · FivD",
            "What impressed me most about Avyro is that it's built around the real challenges AEC firms face every day. "
            "It's practical, easy for teams to adopt, and has helped us work more efficiently. "
            "I believe it can add real value to any growing AEC firm.",
        ),
        (
            "Shruti Thakur",
            "HR Manager · FivD",
            "The onboarding experience was seamless. Our team started using Avyro quickly, and it brought our projects "
            "and day-to-day operations into one place. It feels like software designed for how AEC firms actually work.",
        ),
        (
            "Amandeep Singh",
            "HR Talent · FivD",
            "What I appreciate most about Avyro is how naturally it fits into our existing workflows. "
            "We didn't need to change the way we worked—we simply became more organized, collaborative, and efficient.",
        ),
    ]

    for name, role, quote in quotes:
        heading(doc, name, 3)
        muted(doc, role, after=4)
        p = doc.add_paragraph()
        set_para(p, space_after=12)
        add_text(p, f'"{quote}"', size=11, italic=True, color=SLATE)


def page_faq(doc):
    section_header_block(doc, 12, "FAQ", "FAQ")
    heading(doc, "Your Questions, Answered", 2)
    body(doc, "Straight answers for principals who are done buying another disconnected tool.")

    heading(doc, "Contact card", 3)
    body(doc, "Have a question not covered here?")
    body(doc, "Our team is here to help you find the right solution for your firm.")
    cta(doc, "Contact Us")
    for item in [
        "Enterprise-grade security — Your data is safe with us.",
        "Cloud-based platform — Access anytime, anywhere.",
        "Quick & easy implementation — Get up and running in no time.",
    ]:
        bullet(doc, item)

    faqs = [
        (
            "What is Avyro?",
            "Avyro is the AI-native operating system for AEC firms. One platform that runs winning work, staffing, delivery, "
            "smart timesheets, billing, and live profit—so every hour and every invoice lives on the same record.",
        ),
        (
            "Who is Avyro designed for?",
            "Architecture, engineering, and construction firms that are tired of stitching CRM, project tools, timesheets, "
            "and billing together. Built for principals, operations leaders, PMs, and finance—not generic SaaS checklists.",
        ),
        (
            "How is Avyro different from Deltek, Procore, or Unanet?",
            "Those products each own a slice of your firm. Avyro owns the journey: CRM → proposal → project → time → invoice → profit "
            "on one connected system. Smart timesheets map real desktop activity to projects, so you capture billable hours "
            "competitors leave on the floor — and you stop paying for a Frankenstein stack of licenses.",
        ),
        (
            "What do we replace?",
            "Most firms replace a patchwork of CRM (Cosential, HubSpot), resourcing (Deltek), timesheets and billing "
            "(BQE CORE, spreadsheets), and reporting tools. Avyro runs all of that on one record — so you stop paying for "
            "seven subscriptions and stop re-typing data between them.",
        ),
        (
            "How long does it take to go live?",
            "Most AEC firms are running core workflows — CRM, projects, timesheets, and billing — within 4–8 weeks with "
            "guided onboarding and data migration support. You start with the modules you need and expand from there.",
        ),
        (
            "What does it cost vs our current stack?",
            "Avyro typically replaces multiple point tools with one platform — so total software spend often drops even "
            "before you count recovered billable hours. Contact our team for a quote mapped to your firm size and modules; "
            "we will walk through your current stack side by side.",
        ),
        (
            "Is Avyro easy to implement?",
            "Yes. Avyro is cloud-based and designed for fast rollout with guided onboarding, data migration support, and "
            "configurable workflows that match how AEC firms already operate — without lengthy IT projects.",
        ),
        (
            "Can Avyro integrate with our existing tools?",
            "Avyro connects with the tools your teams already use — accounting systems, document management, calendars, "
            "and more — so data flows across your stack without duplicate entry.",
        ),
        (
            "How secure is my data with Avyro?",
            "Avyro uses enterprise-grade security with encrypted data in transit and at rest, role-based access controls, "
            "audit trails, and regular security monitoring to keep your firm's data protected.",
        ),
        (
            "What kind of support does Avyro offer?",
            "Avyro provides dedicated onboarding, in-app guidance, documentation, and responsive customer support to help "
            "your team adopt the platform and get answers when you need them.",
        ),
        (
            "How is Avyro priced?",
            "Avyro offers flexible, scalable pricing based on your firm's size and modules needed. Contact our team for a "
            "tailored quote that fits your team structure and growth plans.",
        ),
    ]

    heading(doc, "Questions & answers", 3)
    for q, a in faqs:
        p = doc.add_paragraph()
        set_para(p, space_before=8, space_after=2)
        add_text(p, "Q: ", size=11, bold=True, color=TEAL)
        add_text(p, q, size=11, bold=True, color=NAVY)
        body(doc, a, after=6)


def page_contact(doc):
    section_header_block(doc, 13, "Contact Us", "Contact us")
    heading(doc, "See Your Firm on Avyro", 2)
    body(
        doc,
        "Tell us about your firm and we'll walk you through the platform with your own workflows — projects, timesheets, "
        "and billing — so you can judge it on your numbers, not ours.",
    )
    p = doc.add_paragraph()
    set_para(p, space_after=10)
    add_text(p, "See your firm's uncaptured revenue in the first 30 minutes.", size=11, bold=True, color=TEAL)

    heading(doc, "Form fields", 3)
    add_table(
        doc,
        ["Label", "Placeholder"],
        [
            ["Full Name", "Your name"],
            ["Company", "Company name"],
            ["Work Email", "you@company.com"],
            ["Phone", "Phone number"],
            ["Message", "How can we help you?"],
        ],
    )
    cta(doc, "Submit Request")
    muted(doc, "We respect your privacy. Your information is safe with us.")
    muted(doc, "Success: Thanks — your request was sent. We'll follow up soon.")

    heading(doc, "Channels", 3)
    add_table(
        doc,
        ["Channel", "Detail"],
        [
            ["Email", "sales@avyro.com"],
            ["Phone", "+91 6350 057 275"],
            ["Office Address", "3rd Floor, Paras Downtown Mall, Zirakpur, Punjab 140603, India"],
            ["Business Hours", "Mon – Fri, 9:30 AM – 6:30 PM (IST)"],
        ],
    )


def page_footer(doc):
    section_header_block(doc, 14, "Footer", "Site footer")
    heading(doc, "Avyro", 2)
    body(
        doc,
        "The all-in-one platform built for AEC firms to manage projects, people, financials, and performance—"
        "connected in one intelligent ecosystem.",
    )
    muted(doc, "Social: LinkedIn  ·  YouTube  ·  X")

    columns = [
        (
            "Platform",
            [
                "AI-Powered CRM",
                "Billing & Invoice",
                "Asset Management",
                "Proposal Management",
                "Resource Management",
                "Activity Tracker",
                "Smart Timesheets",
                "Approval Workflows",
                "Bulk Uploader",
                "Analytics",
                "Integrations",
            ],
        ),
        (
            "Solutions",
            [
                "Win More Projects",
                "Plan & Deliver Projects",
                "Capture Every Billable Hour",
                "Accelerate Billing & Cash Flow",
                "Enterprise Operations",
            ],
        ),
        ("Industries", ["Architecture", "Engineering", "Construction"]),
        (
            "Use Cases",
            [
                "Architecture",
                "Engineering",
                "Construction",
                "Principals & owners",
                "Operations leaders",
                "Project managers",
                "Accountants and CFOs",
            ],
        ),
        (
            "Resources",
            ["Blog", "Case Studies", "Videos", "Documentation", "Benefits", "Competitive Comparisons"],
        ),
        (
            "Company",
            [
                "Why Avyro?",
                "Solutions",
                "Industry",
                "Testimonials",
                "Pricing",
                "FAQ",
                "Contact Us",
                "Book a Demo",
            ],
        ),
    ]

    for title, links in columns:
        heading(doc, title, 3)
        for link in links:
            bullet(doc, link)

    heading(doc, "Newsletter", 3)
    body(doc, "Stay Connected")
    muted(doc, "Insights, updates, and best practices for AEC firms.")
    bullet(doc, "Enter your work email", bold_prefix="Placeholder: ")
    muted(doc, "Success: You're on the list — thanks for subscribing.")

    heading(doc, "Bottom bar", 3)
    bullet(doc, "Enterprise-grade security")
    bullet(doc, "SOC 2 Type II  ·  ISO 27001  ·  GDPR Compliant")
    bullet(doc, "Privacy Policy  ·  Terms of Service  ·  Cookie Policy")
    muted(doc, "© 2025 Avyro Technologies Pvt. Ltd. All rights reserved.")


def setup_document():
    doc = Document()
    section = doc.sections[0]
    section.page_width = Inches(8.5)
    section.page_height = Inches(11)
    section.left_margin = Inches(0.85)
    section.right_margin = Inches(0.85)
    section.top_margin = Inches(0.75)
    section.bottom_margin = Inches(0.75)

    # Default style
    style = doc.styles["Normal"]
    style.font.name = "Calibri"
    style.font.size = Pt(11)
    style.font.color.rgb = BODY
    style._element.rPr.rFonts.set(qn("w:eastAsia"), "Calibri")

    # Header / footer
    header = section.header
    hp = header.paragraphs[0]
    hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    add_text(hp, "Avyro  ·  Homepage Content", size=8, color=MUTED)

    footer = section.footer
    fp = footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    add_text(fp, "Page ", size=8, color=MUTED)
    # PAGE field
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
    out = Path(__file__).resolve().parents[1] / "Avyro_Homepage_Content.docx"
    doc = setup_document()

    cover_page(doc)
    page_break(doc)
    toc_page(doc)

    pages = [
        page_hero,
        page_revenue_leaks,
        page_solution,
        page_do_outcome,
        page_one_record,
        page_explore,
        page_competitive,
        page_case_study,
        page_calculator,
        page_pricing,
        page_testimonials,
        page_faq,
        page_contact,
        page_footer,
    ]
    for fn in pages:
        page_break(doc)
        fn(doc)

    doc.save(out)
    print(f"Created: {out}")


if __name__ == "__main__":
    main()
