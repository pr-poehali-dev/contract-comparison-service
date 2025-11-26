import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
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
              <Link to="/about" className="text-sm font-medium text-primary">О платформе</Link>
              <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
            </nav>
            <Button>Войти</Button>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">О платформе TenderHub</h2>
              <p className="text-xl text-muted-foreground">
                Современное решение для честных и прозрачных тендеров в строительстве, нефтегазе и поставках кабельной продукции
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Icon name="Target" className="text-primary mb-3" size={32} />
                  <CardTitle>Наша миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Создать максимально прозрачную и честную среду для проведения тендеров, где заказчики получают лучшие предложения, 
                    а поставщики конкурируют на равных условиях без информации друг о друге.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Eye" className="text-accent mb-3" size={32} />
                  <CardTitle>Наше видение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Стать ведущей тендерной платформой для промышленных закупок в России, обеспечивая справедливую конкуренцию 
                    и экономию средств для всех участников рынка.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Как это работает?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Заказчик размещает заявку</h3>
                      <p className="text-muted-foreground">
                        Компания-заказчик создает тендер с детальным описанием требований, объемов, сроков и бюджета.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-accent">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Поставщики подают предложения</h3>
                      <p className="text-muted-foreground">
                        Зарегистрированные поставщики видят заявку и могут анонимно подать свои коммерческие предложения с ценами и условиями.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Анонимное сравнение</h3>
                      <p className="text-muted-foreground">
                        Заказчик видит все предложения с ценами и условиями, но информация о компаниях-поставщиках скрыта. 
                        Поставщики также не видят предложения конкурентов.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-accent">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Выбор победителя</h3>
                      <p className="text-muted-foreground">
                        После завершения срока подачи предложений, заказчик выбирает лучшее предложение. 
                        Только после этого раскрываются контакты победителя.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Icon name="Lock" className="text-primary mb-3" size={32} />
                  <CardTitle>Безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Все участники проходят обязательную верификацию</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Данные защищены современным шифрованием</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Безопасные платежи через проверенные каналы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Гарантия конфиденциальности до завершения тендера</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Zap" className="text-accent mb-3" size={32} />
                  <CardTitle>Преимущества</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Экономия времени на поиск и сравнение поставщиков</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Реальная конкуренция за счет анонимности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Лучшие цены благодаря открытой конкуренции</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Автоматизированное сравнение предложений</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Готовы начать работу?</h3>
                <p className="mb-6 opacity-90">
                  Присоединяйтесь к сотням компаний, которые уже экономят с TenderHub
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/tenders">
                    <Button size="lg" variant="secondary">
                      <Icon name="Search" className="mr-2" size={20} />
                      Смотреть заявки
                    </Button>
                  </Link>
                  <Link to="/contacts">
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Icon name="MessageSquare" className="mr-2" size={20} />
                      Связаться с нами
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
