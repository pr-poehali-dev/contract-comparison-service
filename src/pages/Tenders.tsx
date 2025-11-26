import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Tender {
  id: number;
  title: string;
  category: string;
  budget: string;
  deadline: string;
  offersCount: number;
  status: 'active' | 'closing' | 'closed';
  description: string;
}

const mockTenders: Tender[] = [
  {
    id: 1,
    title: 'Кабельная продукция для строительства ЖК',
    category: 'Кабели и провода',
    budget: '2 500 000 ₽',
    deadline: '15.12.2025',
    offersCount: 8,
    status: 'active',
    description: 'Требуется кабель ВВГ различных сечений для монтажа электросетей'
  },
  {
    id: 2,
    title: 'Трубопроводная арматура для нефтепромысла',
    category: 'Нефтегаз',
    budget: '5 800 000 ₽',
    deadline: '20.12.2025',
    offersCount: 12,
    status: 'active',
    description: 'Задвижки, краны шаровые, фланцы ГОСТ 12815-80'
  },
  {
    id: 3,
    title: 'Строительные материалы для объекта №45',
    category: 'Строительство',
    budget: '8 200 000 ₽',
    deadline: '10.12.2025',
    offersCount: 15,
    status: 'closing',
    description: 'Цемент М500, арматура d12-d25, профнастил С21'
  },
  {
    id: 4,
    title: 'Электротехническое оборудование',
    category: 'Кабели и провода',
    budget: '3 100 000 ₽',
    deadline: '18.12.2025',
    offersCount: 6,
    status: 'active',
    description: 'Щиты распределительные, автоматы, УЗО, счетчики'
  },
  {
    id: 5,
    title: 'Насосное оборудование',
    category: 'Нефтегаз',
    budget: '12 500 000 ₽',
    deadline: '25.12.2025',
    offersCount: 10,
    status: 'active',
    description: 'Центробежные насосы для транспортировки нефтепродуктов'
  },
  {
    id: 6,
    title: 'Металлоконструкции для производственного цеха',
    category: 'Строительство',
    budget: '15 000 000 ₽',
    deadline: '30.12.2025',
    offersCount: 9,
    status: 'active',
    description: 'Балки двутавровые, швеллеры, уголки по проекту'
  },
  {
    id: 7,
    title: 'Осветительное оборудование',
    category: 'Кабели и провода',
    budget: '1 800 000 ₽',
    deadline: '12.12.2025',
    offersCount: 14,
    status: 'active',
    description: 'Светильники промышленные, прожекторы LED'
  }
];

const Tenders = () => {
  const [userRole, setUserRole] = useState<'customer' | 'supplier'>('supplier');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredTenders = mockTenders.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tender.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || tender.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any; text: string }> = {
      active: { variant: 'default', text: 'Активна' },
      closing: { variant: 'secondary', text: 'Завершается' },
      closed: { variant: 'outline', text: 'Закрыта' }
    };
    const config = variants[status] || variants.active;
    return <Badge variant={config.variant}>{config.text}</Badge>;
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
              <Link to="/tenders" className="text-sm font-medium text-primary">Заявки</Link>
              <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">О платформе</Link>
              <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
            </nav>
            <div className="flex items-center gap-3">
              <Select value={userRole} onValueChange={(val) => setUserRole(val as any)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer">Заказчик</SelectItem>
                  <SelectItem value="supplier">Поставщик</SelectItem>
                </SelectContent>
              </Select>
              <Button>Войти</Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">Активные заявки</h2>
            <p className="text-muted-foreground">Найдите подходящие тендеры и отправьте свое предложение</p>
          </div>

          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск по названию или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[220px]">
                <SelectValue placeholder="Все категории" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="Кабели и провода">Кабели и провода</SelectItem>
                <SelectItem value="Строительство">Строительство</SelectItem>
                <SelectItem value="Нефтегаз">Нефтегаз</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="supplier" className="w-full" value={userRole} onValueChange={(val) => setUserRole(val as any)}>
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-6">
              <TabsTrigger value="customer">Для заказчика</TabsTrigger>
              <TabsTrigger value="supplier">Для поставщика</TabsTrigger>
            </TabsList>

            <TabsContent value="customer" className="space-y-4">
              {filteredTenders.map((tender) => (
                <Card key={tender.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{tender.title}</CardTitle>
                          {getStatusBadge(tender.status)}
                        </div>
                        <CardDescription>{tender.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Категория</p>
                        <Badge variant="outline">{tender.category}</Badge>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Бюджет</p>
                        <p className="font-semibold text-lg">{tender.budget}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Срок подачи</p>
                        <p className="font-medium">{tender.deadline}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Предложений</p>
                        <p className="font-medium flex items-center gap-1">
                          <Icon name="Users" size={16} className="text-primary" />
                          {tender.offersCount}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Link to={`/tender/${tender.id}`} className="flex-1">
                        <Button className="w-full">
                          <Icon name="Eye" className="mr-2" size={16} />
                          Смотреть предложения
                        </Button>
                      </Link>
                      <Button variant="outline">
                        <Icon name="MessageSquare" className="mr-2" size={16} />
                        Связаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="supplier" className="space-y-4">
              {filteredTenders.map((tender) => (
                <Card key={tender.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{tender.title}</CardTitle>
                          {getStatusBadge(tender.status)}
                        </div>
                        <CardDescription>{tender.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Категория</p>
                        <Badge variant="outline">{tender.category}</Badge>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Бюджет заказчика</p>
                        <p className="font-semibold text-lg">{tender.budget}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Срок подачи</p>
                        <p className="font-medium">{tender.deadline}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Конкурентов</p>
                        <p className="font-medium flex items-center gap-1 text-accent">
                          <Icon name="TrendingUp" size={16} />
                          {tender.offersCount} участников
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg mb-4">
                      <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                        <Icon name="ShieldCheck" size={14} />
                        Анонимная подача предложений
                      </p>
                      <p className="text-sm">
                        Заказчик увидит только ваши цены и условия. Информация о компании останется скрытой до завершения тендера.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Link to={`/tender/${tender.id}`} className="flex-1">
                        <Button className="w-full">
                          <Icon name="Send" className="mr-2" size={16} />
                          Подать предложение
                        </Button>
                      </Link>
                      <Button variant="outline">
                        <Icon name="BookmarkPlus" className="mr-2" size={16} />
                        В избранное
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Tenders;
