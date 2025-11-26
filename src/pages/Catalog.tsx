import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  unit: string;
  minPrice: number;
  maxPrice: number;
  suppliers: number;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Кабель ВВГ 3х1,5',
    category: 'Кабели и провода',
    subcategory: 'Силовые кабели',
    unit: 'м',
    minPrice: 45,
    maxPrice: 68,
    suppliers: 24
  },
  {
    id: 2,
    name: 'Кабель ВВГ 3х2,5',
    category: 'Кабели и провода',
    subcategory: 'Силовые кабели',
    unit: 'м',
    minPrice: 67,
    maxPrice: 95,
    suppliers: 28
  },
  {
    id: 3,
    name: 'Задвижка стальная Ду 100',
    category: 'Нефтегаз',
    subcategory: 'Трубопроводная арматура',
    unit: 'шт',
    minPrice: 12500,
    maxPrice: 18900,
    suppliers: 15
  },
  {
    id: 4,
    name: 'Цемент М500',
    category: 'Строительство',
    subcategory: 'Цемент и вяжущие',
    unit: 'т',
    minPrice: 6800,
    maxPrice: 8200,
    suppliers: 32
  },
  {
    id: 5,
    name: 'Арматура А500С d12',
    category: 'Строительство',
    subcategory: 'Металлопрокат',
    unit: 'т',
    minPrice: 48000,
    maxPrice: 52000,
    suppliers: 19
  },
  {
    id: 6,
    name: 'Насос центробежный НЦ-320',
    category: 'Нефтегаз',
    subcategory: 'Насосное оборудование',
    unit: 'шт',
    minPrice: 285000,
    maxPrice: 340000,
    suppliers: 8
  },
  {
    id: 7,
    name: 'Щит распределительный ЩР-36',
    category: 'Кабели и провода',
    subcategory: 'Электрощитовое оборудование',
    unit: 'шт',
    minPrice: 15600,
    maxPrice: 21400,
    suppliers: 16
  },
  {
    id: 8,
    name: 'Профнастил С21',
    category: 'Строительство',
    subcategory: 'Кровельные материалы',
    unit: 'м²',
    minPrice: 420,
    maxPrice: 580,
    suppliers: 27
  }
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const categories = ['Кабели и провода', 'Строительство', 'Нефтегаз'];
  const subcategories = Array.from(new Set(mockProducts.map(p => p.subcategory)));

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesSubcategory = selectedSubcategories.length === 0 || selectedSubcategories.includes(product.subcategory);
    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories(prev =>
      prev.includes(subcategory)
        ? prev.filter(s => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Package" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">TenderHub</h1>
                <p className="text-xs text-muted-foreground">Тендерная платформа</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/tenders" className="text-sm font-medium hover:text-primary transition-colors">Заявки</Link>
              <Link to="/catalog" className="text-sm font-medium text-primary">Каталог</Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">О платформе</Link>
              <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
            </nav>
            <Button>Войти</Button>
          </div>
        </div>
      </header>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">Каталог товаров и услуг</h2>
            <p className="text-muted-foreground">Найдите нужные позиции и сравните цены от разных поставщиков</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-base">Фильтры</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Категория</Label>
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все категории</SelectItem>
                        {categories.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-3 block">Подкатегории</Label>
                    <div className="space-y-3">
                      {subcategories.map(sub => (
                        <div key={sub} className="flex items-center space-x-2">
                          <Checkbox
                            id={sub}
                            checked={selectedSubcategories.includes(sub)}
                            onCheckedChange={() => toggleSubcategory(sub)}
                          />
                          <label
                            htmlFor={sub}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {sub}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setCategoryFilter('all');
                      setSelectedSubcategories([]);
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-6">
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Найдено товаров: <span className="font-medium text-foreground">{filteredProducts.length}</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="hover-scale">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline">{product.category}</Badge>
                            <Badge variant="secondary" className="text-xs">{product.subcategory}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Единица измерения:</span>
                          <span className="font-medium">{product.unit}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Диапазон цен:</span>
                          <span className="font-bold text-primary">
                            {product.minPrice.toLocaleString()} - {product.maxPrice.toLocaleString()} ₽
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Поставщиков:</span>
                          <span className="flex items-center gap-1">
                            <Icon name="Users" size={14} className="text-primary" />
                            {product.suppliers}
                          </span>
                        </div>
                        <Button className="w-full mt-2">
                          <Icon name="ShoppingCart" className="mr-2" size={16} />
                          Запросить цены
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Label = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <label className={className}>{children}</label>
);

export default Catalog;
