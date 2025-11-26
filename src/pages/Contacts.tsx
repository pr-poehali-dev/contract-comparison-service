import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
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
              <Link to="/contacts" className="text-sm font-medium text-primary">Контакты</Link>
            </nav>
            <Button>Войти</Button>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Мы всегда рады ответить на ваши вопросы и помочь начать работу с платформой
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Телефон</CardTitle>
                    <CardDescription>Звоните в любое время</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+78001234567" className="text-lg font-medium hover:text-primary transition-colors">
                      +7 (800) 123-45-67
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Бесплатный звонок по России</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <Icon name="Mail" className="text-accent" size={24} />
                    </div>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>Напишите нам письмо</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@tenderhub.ru" className="text-lg font-medium hover:text-primary transition-colors">
                      info@tenderhub.ru
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Ответим в течение 24 часов</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Адрес офиса</CardTitle>
                    <CardDescription>Приезжайте в гости</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium">г. Москва, ул. Новый Арбат, д. 24</p>
                    <p className="text-sm text-muted-foreground mt-2">Пн-Пт: 9:00 - 18:00</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <Icon name="MessageCircle" className="text-accent" size={24} />
                    </div>
                    <CardTitle>Мессенджеры</CardTitle>
                    <CardDescription>Пишите удобным способом</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        <Icon name="MessageCircle" className="mr-2" size={16} />
                        Telegram
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Phone" className="mr-2" size={16} />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Форма обратной связи</CardTitle>
                    <CardDescription>
                      Заполните форму, и мы свяжемся с вами в ближайшее время
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Иван Иванов"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ivan@example.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Компания</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="ООО «Ваша компания»"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Сообщение *</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Опишите ваш вопрос или запрос..."
                          rows={5}
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Send" className="mr-2" size={16} />
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Часто задаваемые вопросы</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Как зарегистрироваться на платформе?</h4>
                    <p className="text-sm text-muted-foreground">
                      Нажмите кнопку "Войти" и выберите тип регистрации: заказчик или поставщик. 
                      Заполните анкету и пройдите верификацию.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Сколько стоят услуги платформы?</h4>
                    <p className="text-sm text-muted-foreground">
                      Размещение заявок для заказчиков - бесплатно. Поставщики платят комиссию только 
                      при успешном завершении сделки.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Как защищена моя информация?</h4>
                    <p className="text-sm text-muted-foreground">
                      Мы используем современное шифрование и гарантируем анонимность до завершения тендера. 
                      Все данные защищены согласно ФЗ-152.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Как быстро я получу предложения?</h4>
                    <p className="text-sm text-muted-foreground">
                      В среднем первые предложения поступают в течение 24 часов после публикации заявки. 
                      Срок подачи устанавливаете вы сами.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
