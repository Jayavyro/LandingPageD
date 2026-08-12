import {
  PRODUCT_DRIVE_BADGE,
  PRODUCT_DRIVE_HEADLINE,
  PRODUCT_DRIVE_MODULES,
  PRODUCT_DRIVE_PRIMARY_CTA,
  PRODUCT_DRIVE_SECONDARY_CTA,
  PRODUCT_DRIVE_SUBTITLE,
} from '../../constants/productDrive'
import ProductLine from '../ProductLine/ProductLine'

function ProductDrive() {
  return (
    <ProductLine
      id="avyro-drive"
      categoryTitle="Avyro Project Management"
      badge={PRODUCT_DRIVE_BADGE}
      headline={PRODUCT_DRIVE_HEADLINE}
      subtitle={PRODUCT_DRIVE_SUBTITLE}
      modules={PRODUCT_DRIVE_MODULES}
      primaryCta={PRODUCT_DRIVE_PRIMARY_CTA}
      secondaryCta={PRODUCT_DRIVE_SECONDARY_CTA}
    />
  )
}

export default ProductDrive
