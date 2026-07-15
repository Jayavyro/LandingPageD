import type { FooterColumn } from '../../constants/footer'
import './FooterColumn.css'

interface FooterColumnProps {
  column: FooterColumn
}

function FooterColumnBlock({ column }: FooterColumnProps) {
  return (
    <div className="footer-column">
      <h3 className="footer-column__title">{column.title}</h3>
      <ul className="footer-column__list">
        {column.links.map((link) => (
          <li key={`${column.id}-${link.label}`}>
            <a className="footer-column__link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumnBlock
