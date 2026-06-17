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


export const productCards: ProductCardData[] = [
  {
    id: '1',
    slug: 'strata-triz',
    title: 'Strata-triz®',
    description: 'Gel de silicona para el tratamiento de cicatrices anómalas, hipertróficas y queloides.',
    imageUrl: '/assets/img/products/strata-triz/imagenes stratpharma_Mesa de trabajo 1 copia 3.png'
  },
  {
    id: '4',
    slug: 'stratamark',
    title: 'Stratamark®',
    description: 'Fórmula para la prevención y tratamiento de estrías con evidencia clínica probada.',
    imageUrl: '/assets/img/products/stratamark/imagenes stratpharma_Mesa de trabajo 1 copia.png'
  },
  {
    id: '2',
    slug: 'stratamed',
    title: 'Stratamed®',
    description: 'Apósito en gel flexible para cuidado postoperatorio y cicatrización óptima de heridas.',
    imageUrl: '/assets/img/products/stratamed/imagenes stratpharma_Mesa de trabajo 1 copia 5.png'
  },
  {
    id: '3',
    slug: 'stratacel',
    title: 'Stratacel®',
    description: 'Apósito para reparación de piel dañada tras procedimientos con láser y tratamientos estéticos.',
    imageUrl: '/assets/img/products/stratacel/imagenes stratpharma_Mesa de trabajo 1 copia 10.png'
  },
  {
    id: '5',
    slug: 'strataxrt',
    title: 'StrataXRT®',
    description: 'Gel de silicona para el tratamiento de radiodermitis, apto para heridas abiertas.',
    imageUrl: '/assets/img/products/strataxrt/imagenes stratpharma_Mesa de trabajo 1 copia 8.png'
  }
];


export const productsMap: Record<string, ProductDetailData> = {
  '1': {
    mainImage: '/assets/img/products/strata-triz/imagenes stratpharma_Mesa de trabajo 1 copia 3.png',
    thumbnails: [
      '/assets/img/products/strata-triz/imagenes stratpharma_Mesa de trabajo 1 copia 6.png',
      '/assets/img/products/strata-triz/imagenes stratpharma_Mesa de trabajo 1 copia 2.png',
      '/assets/img/51.jpg'
    ],
    shopUrl: 'https://www.farmavazquez.com/comprar-strata-triz-5962',
    infoUrl: '/strata-triz/info',
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
    mainImage: '/assets/img/products/stratamed/imagenes stratpharma_Mesa de trabajo 1 copia 7.png',
    thumbnails: [
      '/assets/img/products/stratamed/imagenes stratpharma_Mesa de trabajo 1 copia 7.png',
      '/assets/img/products/stratamed/imagenes stratpharma_Mesa de trabajo 1 copia 5.png',
      '/assets/img/products/stratamed/imagenes stratpharma_Mesa de trabajo 1 copia 12.png',
      '/assets/img/51.jpg'
    ],
    shopUrl: 'https://www.farmavazquez.com/#63e4/classic/m=and&q=stratamed',
    infoUrl: '/stratamed/info',
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
    mainImage: '/assets/img/products/stratacel/imagenes stratpharma_Mesa de trabajo 1 copia 11.png',
    thumbnails: [
      '/assets/img/products/stratacel/imagenes stratpharma_Mesa de trabajo 1 copia 11.png',
      '/assets/img/products/stratacel/imagenes stratpharma_Mesa de trabajo 1 copia 10.png',
      '/assets/img/51.jpg'
    ],
    shopUrl: 'https://www.farmavazquez.com/buscar?controller=search&orderby=position&orderway=desc&search_query=stratacel&submitsearch=Search',
    infoUrl: '/stratacel/info',
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
    mainImage: '/assets/img/products/stratamark/imagenes stratpharma_Mesa de trabajo 1.png',
    thumbnails: [
      '/assets/img/products/stratamark/imagenes stratpharma_Mesa de trabajo 1.png',
      '/assets/img/products/stratamark/imagenes stratpharma.jpg',
      '/assets/img/products/stratamark/imagenes stratpharma_Mesa de trabajo 1 copia.png',
      '/assets/img/products/stratamark/roll-up.png',
      '/assets/img/51.jpg'
    ],
    shopUrl: 'https://www.farmavazquez.com/stratamark-5951',
    infoUrl: '/stratamark/info',
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
    mainImage: '/assets/img/products/strataxrt/imagenes stratpharma_Mesa de trabajo 1 copia 8.png',
    thumbnails: [
      '/assets/img/products/strataxrt/imagenes stratpharma_Mesa de trabajo 1 copia 8.png',
      '/assets/img/products/strataxrt/imagenes stratpharma_Mesa de trabajo 1 copia 9.png',
      '/assets/img/51.jpg'
    ],
    shopUrl: 'https://www.farmavazquez.com/buscar?controller=search&orderby=position&orderway=desc&search_query=strataxrt&submitsearch=Search',
    infoUrl: '/strataxrt/info',
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
