import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'venture2',
      email: 'admin@rifht.com',
      password: bcrypt.hashSync('venture2thebest'),
      isAdmin: true,
    },
    {
      name: 'Jane Doe',
      email: 'user@example.com',
      password: bcrypt.hashSync('firstuser'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'comingsoon',
      slug: 'coming-oon',
      category: 'samplecat',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'sample brand',
      rating: 4.5,
      numReviews: 10,
      description: 'sample desc',
    },
    {
      // _id: '2',
      name: 'comingsoon2',
      slug: 'coming-soon-2',
      category: 'samplecat',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'sample brand',
      rating: 4.0,
      numReviews: 10,
      description: 'sample desc',
    },
    {
      // _id: '3',
      name: 'comingsoon3',
      slug: 'coming-soon-3',
      category: 'samplecat',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'sample brand',
      rating: 4.5,
      numReviews: 14,
      description: 'sampel desc',
    },
    {
      // _id: '4',
      name: 'comingsoon4',
      slug: 'coming-soon-4',
      category: 'samplecat',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'sample brand',
      rating: 4.5,
      numReviews: 10,
      description: 'sample desc',
    },
  ],
};
export default data;
