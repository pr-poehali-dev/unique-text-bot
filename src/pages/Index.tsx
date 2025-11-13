import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([]);
  const [activeSection, setActiveSection] = useState('home');

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatMessages([...chatMessages, { role: 'user', text: message }]);
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'Отличный вопрос! Я адаптируюсь под ваш стиль письма и создам уникальный текст специально для вас. Расскажите подробнее, что вам нужно?' 
      }]);
    }, 1000);
    
    setMessage('');
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                TextAI Pro
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Чат', 'Тарифы', 'Примеры', 'О проекте', 'FAQ'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(['home', 'chat', 'pricing', 'examples', 'about', 'faq'][idx])}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === ['home', 'chat', 'pricing', 'examples', 'about', 'faq'][idx] 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Zap" size={16} className="mr-2" />
              Начать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Искусственный интеллект нового поколения
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Создавай{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  уникальные тексты
                </span>{' '}
                за секунды
              </h1>
              
              <p className="text-xl text-muted-foreground">
                AI-помощник, который адаптируется под твой стиль письма и создаёт посты, статьи и контент с твоим уникальным голосом
              </p>
              
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
                  onClick={() => scrollToSection('chat')}
                >
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Пользователей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">1M+</div>
                  <div className="text-sm text-muted-foreground">Текстов создано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4.9★</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse-glow" />
              <div className="relative bg-card border border-border rounded-2xl p-6 animate-float">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="User" size={16} className="text-white" />
                    </div>
                    <div className="flex-1 bg-muted rounded-xl p-3">
                      <p className="text-sm">Напиши пост про новый продукт в моём стиле</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                      <Icon name="Sparkles" size={16} className="text-white" />
                    </div>
                    <div className="flex-1 bg-primary/10 border border-primary/20 rounded-xl p-3">
                      <p className="text-sm">
                        🚀 Встречайте наш новый продукт! Мы долго работали над этим, и сегодня рады представить вам что-то действительно особенное...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="chat" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">
              <Icon name="MessageSquare" size={14} className="mr-1" />
              Интерактивный чат
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Общайся с{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                AI-помощником
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Бот запоминает твой стиль и создаёт контент, который звучит как ты
            </p>
          </div>

          <Card className="border-2 border-primary/20 bg-card">
            <CardContent className="p-6">
              <div className="space-y-4 mb-4 h-96 overflow-y-auto">
                {chatMessages.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-center">
                    <div>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name="Bot" size={32} className="text-white" />
                      </div>
                      <p className="text-muted-foreground">
                        Привет! Я твой AI-помощник. Задай мне вопрос или попроси написать текст 👇
                      </p>
                    </div>
                  </div>
                ) : (
                  chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                      {msg.role === 'ai' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <Icon name="Bot" size={16} className="text-white" />
                        </div>
                      )}
                      <div className={`max-w-[80%] rounded-xl p-3 ${
                        msg.role === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm">{msg.text}</p>
                      </div>
                      {msg.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          <Icon name="User" size={16} className="text-white" />
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              <div className="flex gap-2">
                <Textarea
                  placeholder="Напиши сообщение..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                  className="resize-none"
                  rows={2}
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  size="lg"
                >
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
              <Icon name="CreditCard" size={14} className="mr-1" />
              Тарифы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выбери свой{' '}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                тарифный план
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Гибкие цены для любых задач
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Старт',
                price: '0₽',
                period: 'навсегда',
                features: ['10 запросов в день', 'Базовая адаптация стиля', 'Email поддержка'],
                icon: 'Rocket',
                gradient: 'from-primary/20 to-secondary/20'
              },
              {
                name: 'Про',
                price: '990₽',
                period: 'в месяц',
                features: ['Безлимитные запросы', 'Продвинутая адаптация стиля', 'Приоритетная поддержка', 'API доступ'],
                icon: 'Zap',
                gradient: 'from-secondary/20 to-accent/20',
                popular: true
              },
              {
                name: 'Бизнес',
                price: '4990₽',
                period: 'в месяц',
                features: ['Всё из Про', 'Командный доступ', 'Персональный менеджер', 'Кастомизация модели'],
                icon: 'Crown',
                gradient: 'from-accent/20 to-primary/20'
              }
            ].map((plan, idx) => (
              <Card 
                key={idx}
                className={`relative overflow-hidden border-2 transition-all hover:scale-105 ${
                  plan.popular ? 'border-secondary shadow-2xl shadow-secondary/20' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-white">Популярный</Badge>
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`} />
                <CardHeader className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={plan.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>
                    <div className="text-4xl font-bold text-foreground mt-2">
                      {plan.price}
                    </div>
                    <div className="text-sm">{plan.period}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-secondary to-accent hover:opacity-90' 
                        : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                    }`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              <Icon name="FileText" size={14} className="mr-1" />
              Примеры работ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что умеет{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                наш AI
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Посты для соцсетей', icon: 'Instagram', color: 'primary' },
              { title: 'Статьи для блога', icon: 'BookOpen', color: 'secondary' },
              { title: 'Email-рассылки', icon: 'Mail', color: 'accent' },
              { title: 'Описания товаров', icon: 'ShoppingCart', color: 'primary' },
              { title: 'SEO-тексты', icon: 'Search', color: 'secondary' },
              { title: 'Скрипты для видео', icon: 'Video', color: 'accent' }
            ].map((example, idx) => (
              <Card key={idx} className="border-2 border-border hover:border-primary/50 transition-all hover:scale-105 cursor-pointer group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${example.color} to-${example.color}/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={example.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Создавайте качественный контент в вашем уникальном стиле
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">
              <Icon name="Info" size={14} className="mr-1" />
              О проекте
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                TextAI Pro
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Адаптация под стиль',
                description: 'AI анализирует твои тексты и запоминает уникальный стиль письма',
                icon: 'Brain'
              },
              {
                title: 'Уникальность',
                description: 'Каждый сгенерированный текст проходит проверку на оригинальность',
                icon: 'Sparkles'
              },
              {
                title: 'Быстрота',
                description: 'Получай готовый контент за считанные секунды',
                icon: 'Zap'
              },
              {
                title: 'Безопасность',
                description: 'Твои данные защищены и используются только для персонализации',
                icon: 'Shield'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
              <Icon name="HelpCircle" size={14} className="mr-1" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Частые{' '}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                вопросы
              </span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Как AI запоминает мой стиль?',
                answer: 'Наш AI анализирует твои предыдущие тексты, обращая внимание на структуру предложений, выбор слов, тон и манеру изложения. Чем больше ты общаешься с ботом, тем точнее он подстраивается под твой стиль.'
              },
              {
                question: 'Можно ли редактировать сгенерированные тексты?',
                answer: 'Конечно! Ты можешь попросить AI внести правки или отредактировать текст вручную. Бот учится на твоих правках и со временем создаёт более точный контент.'
              },
              {
                question: 'Насколько уникальны тексты?',
                answer: 'Все тексты генерируются с нуля на основе твоих запросов и стиля. Мы гарантируем высокий процент уникальности и проверяем каждый текст перед отправкой.'
              },
              {
                question: 'Какие языки поддерживаются?',
                answer: 'На данный момент поддерживаются русский и английский языки. Скоро добавим поддержку других популярных языков.'
              },
              {
                question: 'Можно ли использовать для коммерческих целей?',
                answer: 'Да! Все тарифы, включая бесплатный, позволяют использовать сгенерированный контент в коммерческих проектах без ограничений.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 border-border rounded-xl px-6 bg-card">
                <AccordionTrigger className="text-left hover:text-primary">
                  <span className="font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                TextAI Pro
              </span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 TextAI Pro. Все права защищены.
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
