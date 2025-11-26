import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const TenderDetail = () => {
  const { id } = useParams();
  const [offerPrice, setOfferPrice] = useState('');
  const [offerDelivery, setOfferDelivery] = useState('');
  const [offerComment, setOfferComment] = useState('');

  const tender = {
    id: Number(id),
    title: 'Кабельная продукция для строительства ЖК',
    category: 'Кабели и провода',
    budget: '2 500 000 ₽',
    deadline: '15.12.2025',
    offersCount: 8,
    status: 'active',
    description: 'Требуется кабель ВВГ различных сечений для монтажа электросетей в новом жилом комплексе.',
    fullDescription: `Проводим закупку кабельной продукции для монтажа электросетей в строящемся жилом комплексе "Солнечный". 
    
Технические требования:
- Кабель ВВГ 3х1,5 - 2000 м
- Кабель ВВГ 3х2,5 - 3000 м  
- Кабель ВВГ 3х4 - 1500 м
- Кабель ВВГнг-LS 5х10 - 500 м

Все кабели должны соответствовать ГОСТ 31996-2012. Необходимы сертификаты соответствия.

Условия поставки:
- Доставка до объекта (г. Москва, ул. Строительная, д. 45)
- Оплата по факту поставки в течение 30 дней
- Гарантия производителя

Срок поставки: до 31.12.2025`,
    customer: {
      company: 'ООО "СтройИнвест"',
      contactPerson: 'Иванов Иван Иванович',
      phone: '+7 (495) 123-45-67',
      email: 'ivanov@stroyinvest.ru'
    }
  };

  const anonymousOffers = [
    { id: 1, price: '2 300 000 ₽', delivery: '10 дней', rating: 4.8, reviews: 127 },
    { id: 2, price: '2 450 000 ₽', delivery: '7 дней', rating: 4.9, reviews: 243 },
    { id: 3, price: '2 200 000 ₽', delivery: '14 дней', rating: 4.6, reviews: 89 },
    { id: 4, price: '2 550 000 ₽', delivery: '5 дней', rating: 5.0, reviews: 312 },
    { id: 5, price: '2 350 000 ₽', delivery: '8 дней', rating: 4.7, reviews: 156 },
  ];

  const handleSubmitOffer = () => {
    alert('Ваше предложение отправлено! Заказчик получит уведомление.');
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
              <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">О платформе</Link>
              <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
            </nav>
            <Button>Войти</Button>
          </div>
        </div>
      </header>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/tenders" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
              <Icon name="ArrowLeft" size={16} />
              Вернуться к заявкам
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-3xl">{tender.title}</CardTitle>
                        <Badge>Активна</Badge>
                      </div>
                      <CardDescription className="text-base">{tender.description}</CardDescription>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Категория</p>
                      <Badge variant="outline">{tender.category}</Badge>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Бюджет</p>
                      <p className="font-bold text-xl text-primary">{tender.budget}</p>
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
                </CardHeader>
                <Separator />
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Описание заявки</h3>
                  <div className="whitespace-pre-line text-muted-foreground">
                    {tender.fullDescription}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BarChart3" className="text-primary" size={24} />
                    Анонимные предложения от поставщиков
                  </CardTitle>
                  <CardDescription>
                    Информация о компаниях будет раскрыта после завершения тендера
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {anonymousOffers.map((offer) => (
                      <Card key={offer.id} className="bg-muted/30">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Icon name="Building2" className="text-primary" size={20} />
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Поставщик #{offer.id}</p>
                                <div className="flex items-center gap-3 mt-1">
                                  <div className="flex items-center gap-1">
                                    <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                                    <span className="text-sm font-medium">{offer.rating}</span>
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    {offer.reviews} отзывов
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-2xl text-primary">{offer.price}</p>
                              <p className="text-sm text-muted-foreground">Доставка: {offer.delivery}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Send" className="text-accent" size={20} />
                    Подать предложение
                  </CardTitle>
                  <CardDescription>
                    Ваши контактные данные останутся скрытыми
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="price">Ваша цена (₽)</Label>
                    <Input
                      id="price"
                      type="text"
                      placeholder="2 400 000"
                      value={offerPrice}
                      onChange={(e) => setOfferPrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="delivery">Срок поставки</Label>
                    <Input
                      id="delivery"
                      type="text"
                      placeholder="7 дней"
                      value={offerDelivery}
                      onChange={(e) => setOfferDelivery(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea
                      id="comment"
                      placeholder="Дополнительная информация о вашем предложении..."
                      value={offerComment}
                      onChange={(e) => setOfferComment(e.target.value)}
                      rows={4}
                    />
                  </div>
                  <Button className="w-full" size="lg" onClick={handleSubmitOffer}>
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить предложение
                  </Button>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <Icon name="ShieldCheck" size={14} />
                      Заказчик увидит только вашу цену и условия
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Информация о заказчике</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Компания</p>
                    <p className="font-medium">{tender.customer.company}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-xs text-muted-foreground">Контактное лицо</p>
                    <p className="font-medium">{tender.customer.contactPerson}</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" size="sm">
                      <Icon name="Phone" className="mr-2" size={14} />
                      {tender.customer.phone}
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Icon name="Mail" className="mr-2" size={14} />
                      Написать письмо
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenderDetail;
