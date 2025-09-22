import { MenuCategory } from '../types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'hot-drinks',
    name: 'Hot Drinks',
    nameAr: 'المشروبات الساخنة',
    items: [
      {
        id: 'hd-1',
        name: 'Espresso',
        nameAr: 'إسبريسو',
        price: 15,
        category: 'hot-drinks',
        popular: true
      },
      {
        id: 'hd-2',
        name: 'Cappuccino',
        nameAr: 'كابتشينو',
        price: 18,
        category: 'hot-drinks',
        popular: true
      },
      {
        id: 'hd-3',
        name: 'Latte',
        nameAr: 'لاتيه',
        price: 20,
        category: 'hot-drinks'
      },
      {
        id: 'hd-4',
        name: 'Turkish Coffee',
        nameAr: 'قهوة تركية',
        price: 12,
        category: 'hot-drinks'
      },
      {
        id: 'hd-5',
        name: 'Arabic Coffee',
        nameAr: 'قهوة عربية',
        price: 10,
        category: 'hot-drinks'
      },
      {
        id: 'hd-6',
        name: 'Hot Chocolate',
        nameAr: 'شوكولاتة ساخنة',
        price: 22,
        category: 'hot-drinks'
      },
      {
        id: 'hd-7',
        name: 'Chai Latte',
        nameAr: 'تشاي لاتيه',
        price: 19,
        category: 'hot-drinks'
      },
      {
        id: 'hd-8',
        name: 'Green Tea',
        nameAr: 'شاي أخضر',
        price: 14,
        category: 'hot-drinks'
      }
    ]
  },
  {
    id: 'cold-drinks',
    name: 'Cold Drinks',
    nameAr: 'المشروبات الباردة',
    items: [
      {
        id: 'cd-1',
        name: 'Iced Coffee',
        nameAr: 'قهوة مثلجة',
        price: 18,
        category: 'cold-drinks',
        popular: true
      },
      {
        id: 'cd-2',
        name: 'Iced Latte',
        nameAr: 'لاتيه مثلج',
        price: 22,
        category: 'cold-drinks'
      },
      {
        id: 'cd-3',
        name: 'Frappuccino',
        nameAr: 'فرابتشينو',
        price: 25,
        category: 'cold-drinks',
        popular: true
      },
      {
        id: 'cd-4',
        name: 'Iced Tea',
        nameAr: 'شاي مثلج',
        price: 16,
        category: 'cold-drinks'
      },
      {
        id: 'cd-5',
        name: 'Fresh Orange Juice',
        nameAr: 'عصير برتقال طازج',
        price: 20,
        category: 'cold-drinks'
      },
      {
        id: 'cd-6',
        name: 'Strawberry Smoothie',
        nameAr: 'سموثي الفراولة',
        price: 24,
        category: 'cold-drinks'
      },
      {
        id: 'cd-7',
        name: 'Mango Juice',
        nameAr: 'عصير المانجو',
        price: 22,
        category: 'cold-drinks'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    nameAr: 'الحلويات',
    items: [
      {
        id: 'd-1',
        name: 'Chocolate Cake',
        nameAr: 'كيك الشوكولاتة',
        price: 28,
        category: 'desserts',
        popular: true
      },
      {
        id: 'd-2',
        name: 'Cheesecake',
        nameAr: 'تشيز كيك',
        price: 32,
        category: 'desserts',
        popular: true
      },
      {
        id: 'd-3',
        name: 'Tiramisu',
        nameAr: 'تيراميسو',
        price: 35,
        category: 'desserts'
      },
      {
        id: 'd-4',
        name: 'Macarons',
        nameAr: 'ماكارون',
        price: 5,
        category: 'desserts',
        description: 'Per piece',
        descriptionAr: 'للقطعة الواحدة'
      },
      {
        id: 'd-5',
        name: 'Baklava',
        nameAr: 'بقلاوة',
        price: 25,
        category: 'desserts'
      },
      {
        id: 'd-6',
        name: 'Kunafa',
        nameAr: 'كنافة',
        price: 30,
        category: 'desserts'
      },
      {
        id: 'd-7',
        name: 'Muhallabia',
        nameAr: 'مهلبية',
        price: 18,
        category: 'desserts'
      }
    ]
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    nameAr: 'الفطور',
    items: [
      {
        id: 'b-1',
        name: 'Croissant',
        nameAr: 'كرواسان',
        price: 12,
        category: 'breakfast'
      },
      {
        id: 'b-2',
        name: 'Pancakes',
        nameAr: 'بان كيك',
        price: 25,
        category: 'breakfast',
        popular: true
      },
      {
        id: 'b-3',
        name: 'French Toast',
        nameAr: 'توست فرنسي',
        price: 22,
        category: 'breakfast'
      },
      {
        id: 'b-4',
        name: 'Scrambled Eggs',
        nameAr: 'بيض مخفوق',
        price: 18,
        category: 'breakfast'
      },
      {
        id: 'b-5',
        name: 'Avocado Toast',
        nameAr: 'توست الأفوكادو',
        price: 28,
        category: 'breakfast'
      }
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks',
    nameAr: 'الوجبات الخفيفة',
    items: [
      {
        id: 's-1',
        name: 'Cookies',
        nameAr: 'كوكيز',
        price: 8,
        category: 'snacks'
      },
      {
        id: 's-2',
        name: 'Muffins',
        nameAr: 'مافن',
        price: 15,
        category: 'snacks'
      },
      {
        id: 's-3',
        name: 'Donuts',
        nameAr: 'دونات',
        price: 12,
        category: 'snacks'
      },
      {
        id: 's-4',
        name: 'Sandwiches',
        nameAr: 'ساندويتش',
        price: 20,
        category: 'snacks'
      }
    ]
  }
];