import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ProductItem } from '../../constants/products'
import './ProductCard.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface ProductCardProps {
  product: ProductItem
  index: number
}

function ProductCard({ product, index }: ProductCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = product.icon

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
        transition: { duration: 0.4, delay: 0.08 + index * 0.05, ease: EASE },
      }

  const isInternal = product.href.startsWith('/')
  const className = `product-card product-card--${product.accent}`

  const content = (
    <>
      <span className="product-card__icon-wrap" aria-hidden="true">
        <Icon className="product-card__icon" strokeWidth={1.75} />
      </span>

      <span className="product-card__body">
        <span className="product-card__title">{product.title}</span>
        <span className="product-card__description">{product.description}</span>
      </span>
    </>
  )

  if (isInternal) {
    return (
      <motion.div {...motionProps}>
        <Link to={product.href} className={className}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.a href={product.href} className={className} {...motionProps}>
      {content}
    </motion.a>
  )
}

export default ProductCard
