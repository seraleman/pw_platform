export interface Product {
  nombre: string
  descripcion: string
  topings: string[]
  base: string
  imagenes: string[]
  precio: number
}

export const productsData: Product[] = [
  {
    nombre: 'Green Delight',
    descripcion:
      'Base con doble porción de yogurt griego endulzado, acompañada de fresas, kiwi, arándanos, banano y granola artesanal.',
    topings: ['Fresas', 'Kiwi', 'Arándanos', 'Banano', 'Granola artesanal'],
    base: 'yogurt',
    imagenes: ['/images/products/green-delight.png'],
    precio: 24200,
  },
  {
    nombre: 'Tropical Vibe',
    descripcion:
      'Base con doble porción de yogurt griego endulzado, acompañada de trozos de kiwi, banano, granola artesanal, un toque de mantequilla de maní y semillas de chía.',
    topings: [
      'Kiwi',
      'Banano',
      'Granola artesanal',
      'Mantequilla de maní',
      'Semillas de chía',
    ],
    base: 'yogurt',
    imagenes: ['/images/products/tropical-vibe.png'],
    precio: 25100,
  },
  {
    nombre: 'Solar Glow',
    descripcion:
      'Base de açaí, acompañada de fresas frescas, rodajas de banano, granola crujiente, mantequilla de maní y un toque de semillas de chía.',
    topings: [
      'Fresas frescas',
      'Banano',
      'Granola crujiente',
      'Mantequilla de maní',
      'Semillas de chía',
    ],
    base: 'açaí',
    imagenes: ['/images/products/solar-glow.png'],
    precio: 19100,
  },
  {
    nombre: 'Berry Bliss',
    descripcion:
      'Base de açaí, acompañada de doble porción de arándanos frescos, rodajas de banano, granola artesanal, mantequilla de maní cremosa y un toque de semillas de chía.',
    topings: [
      'Arándanos frescos',
      'Banano',
      'Granola artesanal',
      'Mantequilla de maní cremosa',
      'Semillas de chía',
    ],
    base: 'açaí',
    imagenes: ['/images/products/berry-bliss.png'],
    precio: 20900,
  },
]
