import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

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
  }
];

const Index = () => {
  const [userRole, setUserRole] = useState<'customer' | 'supplier'>('customer');
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
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Package" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">TenderHub</h1>
                <p className="text-xs text-muted-foreground">Тендерная платформа</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#tenders" className="text-sm font-medium hover:text-primary transition-colors">Заявки</a>
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О платформе</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
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

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Прозрачные тендеры для вашего бизнеса
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современная платформа для размещения заявок и получения конкурентных предложений от поставщиков. 
              Специализация: строительство, нефтегаз, кабельная продукция.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Plus" className="mr-2" size={20} />
                Разместить заявку
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Search" className="mr-2" size={20} />
                Смотреть заявки
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-center">Анонимность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Поставщики не видят друг друга до окончания тендера
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                    <Icon name="Filter" className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-center">Умные фильтры</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Продвинутый поиск по категориям, срокам и объемам
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                    <Icon name="BarChart3" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-center">Сравнение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Удобное сравнение цен и условий от всех поставщиков
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="tenders" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">Активные заявки</h3>
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

          <Tabs defaultValue="customer" className="w-full" value={userRole} onValueChange={(val) => setUserRole(val as any)}>
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
                      <Button className="flex-1">
                        <Icon name="Eye" className="mr-2" size={16} />
                        Смотреть предложения
                      </Button>
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
                      <Button className="flex-1">
                        <Icon name="Send" className="mr-2" size={16} />
                        Подать предложение
                      </Button>
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

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">Почему TenderHub?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="Lock" className="text-primary mb-3" size={32} />
                  <CardTitle>Безопасность сделок</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Все участники проходят верификацию. Данные защищены, а платежи проходят через безопасные каналы.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Zap" className="text-accent mb-3" size={32} />
                  <CardTitle>Быстрая обработка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Автоматизированная система сравнения предложений экономит ваше время при выборе поставщика.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Target" className="text-primary mb-3" size={32} />
                  <CardTitle>Специализация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Фокус на строительстве, нефтегазе и кабельной продукции с глубокой экспертизой в этих отраслях.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Award" className="text-accent mb-3" size={32} />
                  <CardTitle>Прозрачность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Честная конкуренция без скрытых комиссий. Все условия и цены прозрачны для заказчика.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Готовы начать?</h3>
            <p className="text-muted-foreground mb-8">
              Присоединяйтесь к тысячам компаний, которые уже используют TenderHub для своих закупок
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="UserPlus" className="mr-2" size={20} />
                Регистрация заказчика
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Building2" className="mr-2" size={20} />
                Регистрация поставщика
              </Button>
            </div>
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@tenderhub.ru" className="hover:text-primary transition-colors">
                    info@tenderhub.ru
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78001234567" className="hover:text-primary transition-colors">
                    +7 (800) 123-45-67
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Package" className="text-primary-foreground" size={16} />
              </div>
              <span className="font-bold">TenderHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 TenderHub. Все права защищены.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
