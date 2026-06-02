export interface ProductCardData {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ProductDetailContent {
  title: string;
  paragraphList: { paragraph: string }[];
  highlightLine?: string;
  sanitaryLine?: string;
}

export interface ProductDetailData {
  mainImage: string;
  thumbnails: string[];
  shopUrl: string;
  infoUrl: string;
  technicalSheetUrl?: string;
  technicalSheetPreviewImage?: string;
  content: ProductDetailContent;
}

export interface ProductGalleryItem {
  type: 'image' | 'sheet';
  src?: string;
  pdfSrc?: string;
  label: string;
}

const SHEET_STRATA_TRIZ   = '/assets/img/products/strata-triz/Strata-triz%20Detail%20Aid%20Spain_ST-ES-012-2-0225_Lowres.pdf';
const SHEET_STRATAMED     = '/assets/img/products/stratamed/Stratamed%20Detail%20Aid_SM-ES-028-3-0824_LowRes.pdf';
const SHEET_STRATACEL     = '/assets/img/products/stratacel/Stratacel%20Detail%20Aid%20ES_SC-ES-013-2-0324_LowRes.pdf';
const SHEET_STRATAMARK    = '/assets/img/products/stratamark/Stratamark_Detail_Aid_ES_SK-ES-020-2-0824_lowRe.pdf';
const SHEET_STRATAXRT     = '/assets/img/products/strataxrt/StrataXRT_Detail_Aid_Spain_SX-ES-010-2-1024_LowRes.pdf';

export const productCards: ProductCardData[] = [
  {
    id: '1',
    slug: 'strata-triz',
    title: 'Strata-triz®',
    description: 'Gel de silicona para el tratamiento de cicatrices anómalas, hipertróficas y queloides.',
    imageUrl: '/assets/img/products/strata-triz/strata-triz-portada.png'
  },
  {
    id: '4',
    slug: 'stratamark',
    title: 'Stratamark®',
    description: 'Fórmula para la prevención y tratamiento de estrías con evidencia clínica probada.',
    imageUrl: '/assets/img/products/stratamark/stratamark-portada.png'
  },
  {
    id: '2',
    slug: 'stratamed',
    title: 'Stratamed®',
    description: 'Apósito en gel flexible para cuidado postoperatorio y cicatrización óptima de heridas.',
    imageUrl: '/assets/img/products/stratamed/stratamed-portada.png'
  },
  {
    id: '3',
    slug: 'stratacel',
    title: 'Stratacel®',
    description: 'Apósito para reparación de piel dañada tras procedimientos con láser y tratamientos estéticos.',
    imageUrl: '/assets/img/products/stratacel/stratacel-portada.png'
  },
  {
    id: '5',
    slug: 'strataxrt',
    title: 'StrataXRT®',
    description: 'Gel de silicona para el tratamiento de radiodermitis, apto para heridas abiertas.',
    imageUrl: '/assets/img/products/strataxrt/strataxrt-portada.png'
  }
];


export const productsMap: Record<string, ProductDetailData> = {
  '1': {
    mainImage: '/assets/img/products/strata-triz/imgi_44_ST-5-ES-Box-HighRes.jpg',
    thumbnails: [
      '/assets/img/products/strata-triz/imgi_46_ST-5-ES-Tube-HighRes.jpg',
      '/assets/img/products/strata-triz/imgi_78_ST-20-ES-Box-HighRes.jpg'
    ],
    shopUrl: 'https://es.stratpharma-shop.com/product-category/strata-triz/',
    infoUrl: 'https://es.stratatriz.com',
    technicalSheetUrl: SHEET_STRATA_TRIZ,
    technicalSheetPreviewImage: '/assets/img/products/strata-triz/strata-triz-sheet-preview.png',
    content: {
      title: 'STRATA-TRIZ®',
      paragraphList: [
        { paragraph: 'Strata-triz es un gel de silicona transparente, de secado rápido y no pegajoso, diseñado para el tratamiento de cicatrices anómalas o con malformaciones, incluyendo cicatrices hipertróficas, queloides y de acné.' },
        { paragraph: 'Al aplicarse según las indicaciones, Strata-triz forma una lámina de gel de silicona que actúa como una capa protectora, permeable a los gases e impermeable al agua. Esta capa contribuye a hidratar, suavizar y proteger la cicatriz. ' }
      ],
      sanitaryLine: 'STRATA-TRIZ® - Producto Sanitario Clase I'
    }
  },
  '2': {
    mainImage: '/assets/img/products/stratamed/stratamed00.jpeg',
    thumbnails: [
      '/assets/img/products/stratamed/stratamed00.jpeg',
      '/assets/img/products/stratamed/stratamed01.jpeg'
    ],
    shopUrl: 'https://es.stratpharma-shop.com/product-category/stratamed/',
    infoUrl: 'https://stratamed.com',
    technicalSheetUrl: SHEET_STRATAMED,
    technicalSheetPreviewImage: '/assets/img/products/stratamed/stratamed-sheet-preview.png',
    content: {
      title: 'STRATAMED®',
      paragraphList: [
        { paragraph: 'Stratamed es un gran avance en el cuidado postoperatorio. Es un apósito flexible de contacto total que se seca por sí solo y proporciona un entorno óptimo para una cicatrización más rápida de la herida y un alivio de los síntomas (enrojecimiento/decoloración, picor, dolor, molestias).' },
        { paragraph: 'Stratamed se puede utilizar inmediatamente después de la intervención y permite prevenir la formación de cicatrices anormales antes que nunca. Es el único Producto Sanitario del Grupo IIa, formulado a base de polímeros de silicona, que ha sido registrado en la EMA y FDA con la indicación de uso en el lecho de una herida abierta.' },
        { paragraph: 'Este producto ha sido evaluado y aprobado por la FDA y la EMA.' }
      ],
      sanitaryLine: 'STRATAMED® - Producto Sanitario Clase IIa'
    }
  },
  '3': {
    mainImage: '/assets/img/products/stratacel/stratacel00.jpeg',
    thumbnails: [
      '/assets/img/products/stratacel/stratacel00.jpeg'
    ],
    shopUrl: 'https://es.stratpharma-shop.com/product-category/stratacel/',
    infoUrl: 'https://stratacel.com',
    technicalSheetUrl: SHEET_STRATACEL,
    technicalSheetPreviewImage: '/assets/img/products/stratacel/stratacel-sheet-preview.png',
    content: {
      title: 'STRATACEL®',
      paragraphList: [
        { paragraph: 'Stratacel es un apósito flexible diseñado específicamente para la reparación de piel dañada o comprometida tras procedimientos con láser (CO2, Morpheus, Dermapen), rejuvenecimiento facial, vaginal y eliminación de tatuajes.' },
        { paragraph: 'Stratacel está diseñado para aquellas zonas de la piel que son especialmente sensibles. Es adecuado para pacientes que se someten a intervenciones estéticas en la zona periorbital, los labios o las fosas nasales, o que tienen la piel sensible.' }
      ],
      highlightLine: 'Reduce el tiempo de recuperación a la mitad.',
      sanitaryLine: 'STRATACEL® - Producto Sanitario Clase IIa'
    }
  },
  '4': {
    mainImage: '/assets/img/products/stratamark/stratamark00.jpg',
    thumbnails: [
      '/assets/img/products/stratamark/stratamark00.jpg',
      '/assets/img/products/stratamark/stratamark01.jpg',
      '/assets/img/products/stratamark/stratamark02.jpg',
      '/assets/img/products/stratamark/stratamark03.png'
    ],
    shopUrl: 'https://es.stratpharma-shop.com/product-category/stratamark/',
    infoUrl: 'https://stratamark.net/',
    technicalSheetUrl: SHEET_STRATAMARK,
    technicalSheetPreviewImage: '/assets/img/products/stratamark/stratamark-sheet-preview.png',
    content: {
      title: 'STRATAMARK®',
      paragraphList: [
        { paragraph: 'Stratamark es una fórmula novedosa, especialmente diseñada para la prevención y el tratamiento de las estrías (Striae Distensae). Es un Producto Sanitario registrado con evidencia clínica probada.' },
        { paragraph: 'Stratamark se desarrolló para el tratamiento y la prevención de todo tipo de estrías, en particular aquellas que cubren una amplia superficie, como las que se producen durante el embarazo, por implantes mamarios, los estirones de la adolescencia, el aumento de peso o el culturismo.' }
      ],
      sanitaryLine: 'STRATAMARK® - Producto Sanitario Clase I'
    }
  },
  '5': {
    mainImage: '/assets/img/products/strataxrt/imgi_44_SX20EX00TubeBoxLowRes.jpg',
    thumbnails: [
      '/assets/img/products/strataxrt/imgi_44_SX20EX00TubeBoxLowRes.jpg',
      '/assets/img/products/strataxrt/strataxrt01.jpeg'
    ],
    shopUrl: 'https://es.stratpharma-shop.com/product-category/strataxrt/',
    infoUrl: 'https://strataxrt.com',
    technicalSheetUrl: SHEET_STRATAXRT,
    technicalSheetPreviewImage: '/assets/img/products/strataxrt/strataxrt-sheet-preview.png',
    content: {
      title: 'STRATAXRT®',
      paragraphList: [
        { paragraph: 'StrataXRT es un gel formulado a base de polímeros de silicona que hacen que sea semioclusivo, autosecante, bacteriostático, estéril hasta su apertura y totalmente inerte.' },
        { paragraph: 'Ha sido diseñado para su uso en todo tipo de radiodermitis, teniendo la indicación de su uso en el seno de heridas abiertas y zonas con mucosa. Registrados en la FDA, EMA y resto de agencias regulatorias mundiales.' }
      ],
      sanitaryLine: 'STRATAXRT® - Producto Sanitario Clase IIa'
    }
  }
};

export const productsBySlug: Record<string, ProductDetailData> = {
  'strata-triz': productsMap['1'],
  'stratamark':  productsMap['4'],
  'stratamed':   productsMap['2'],
  'stratacel':   productsMap['3'],
  'strataxrt':   productsMap['5'],
};

export function buildGalleryItems(product: ProductDetailData): ProductGalleryItem[] {
  const items: ProductGalleryItem[] = [
    { type: 'image', src: product.mainImage, label: product.content.title },
    ...product.thumbnails
      .filter(thumb => thumb !== product.mainImage)
      .map(thumb => ({ type: 'image' as const, src: thumb, label: product.content.title }))
  ];

  if (product.technicalSheetUrl && product.technicalSheetPreviewImage) {
    items.push({
      type: 'sheet',
      src: product.technicalSheetPreviewImage,
      pdfSrc: product.technicalSheetUrl,
      label: `Ficha técnica de ${product.content.title}`
    });
  }

  return items;
}
