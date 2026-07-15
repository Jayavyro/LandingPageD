import { motion, useReducedMotion } from 'framer-motion'
import { Layers } from 'lucide-react'
import {
  PRODUCTS,
  PRODUCTS_HEADLINE,
  PRODUCTS_SUBTITLE,
} from '../../constants/products'
import ProductCard from './ProductCard'
import './Products.css'

const EASE = [0.22, 1, 0.36, 1] as const

function Products() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.4, delay, ease: EASE },
        }

  return (
    <section
      id="products"
      className="products"
      aria-labelledby="products-heading"
    >
      <div className="products__ambient" aria-hidden="true">
        <div className="products__grid-pattern" />
        <div className="products__glow products__glow--center" />
        <div className="products__glow products__glow--left" />
        <div className="products__glow products__glow--right" />
      </div>

      <div className="products__container">
        <header className="products__intro">
          <motion.div {...fadeUp(0)}>
            <span className="products__badge">
              <Layers className="products__badge-icon" aria-hidden="true" />
              Platform Modules
            </span>
          </motion.div>

          <motion.h2
            id="products-heading"
            className="products__title"
            {...fadeUp(0.06)}
          >
            {PRODUCTS_HEADLINE}
          </motion.h2>

          <motion.p className="products__subtitle" {...fadeUp(0.12)}>
            {PRODUCTS_SUBTITLE}
          </motion.p>
        </header>

        <div className="products__grid-shell">
          <div className="products__grid">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
