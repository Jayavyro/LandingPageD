import {
  PRODUCT_X_BADGE,
  PRODUCT_X_HEADLINE,
  PRODUCT_X_MODULES,
  PRODUCT_X_PRIMARY_CTA,
  PRODUCT_X_SECONDARY_CTA,
  PRODUCT_X_SUBTITLE,
} from '../../constants/productX'
import ProductLine from '../ProductLine/ProductLine'

function ProductX() {
  return (
    <ProductLine
      id="avyro-x"
      badge={PRODUCT_X_BADGE}
      headline={PRODUCT_X_HEADLINE}
      subtitle={PRODUCT_X_SUBTITLE}
      modules={PRODUCT_X_MODULES}
      primaryCta={PRODUCT_X_PRIMARY_CTA}
      secondaryCta={PRODUCT_X_SECONDARY_CTA}
      tinted
      fourCol
    />
  )
}

export default ProductX
