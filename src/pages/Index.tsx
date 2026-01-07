import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  size: string;
  color: string;
  occasion: string;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [priceRange, setPriceRange] = useState<number[]>([0, 15000]);
  const [selectedSize, setSelectedSize] = useState<string>('Все');
  const [selectedColor, setSelectedColor] = useState<string>('Все');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('Все');

  const categories = ['Все', 'МоноБукеты', 'Роза', 'Авторские Букеты', 'Корзины', 'Свадебные Букеты'];

  const products: Product[] = [
    { id: 1, name: 'Розовая нежность', category: 'Роза', price: 4500, image: 'https://cdn.poehali.dev/projects/168434d0-bc02-4df2-8007-c5bca7cc6f25/files/ba0238ea-e937-44ef-9df3-d157dca4c7b0.jpg', size: 'Средний', color: 'Розовый', occasion: 'День Рождения' },
    { id: 2, name: 'Свадебная мечта', category: 'Свадебные Букеты', price: 12000, image: 'https://cdn.poehali.dev/projects/168434d0-bc02-4df2-8007-c5bca7cc6f25/files/361443cc-963c-4bd6-a8b3-aa1f29df3bdc.jpg', size: 'Большой', color: 'Белый', occasion: 'Свадьба' },
    { id: 3, name: 'Корзина изобилия', category: 'Корзины', price: 8500, image: 'https://cdn.poehali.dev/projects/168434d0-bc02-4df2-8007-c5bca7cc6f25/files/80724744-f41c-41ca-8dea-87b6d7d82b10.jpg', size: 'Большой', color: 'Микс', occasion: 'Юбилей' },
    { id: 4, name: 'Монобукет белых роз', category: 'МоноБукеты', price: 3500, image: 'https://cdn.poehali.dev/projects/168434d0-bc02-4df2-8007-c5bca7cc6f25/files/361443cc-963c-4bd6-a8b3-aa1f29df3bdc.jpg', size: 'Маленький', color: 'Белый', occasion: 'Признание' },
    { id: 5, name: 'Авторская композиция', category: 'Авторские Букеты', price: 9500, image: 'https://cdn.poehali.dev/projects/168434d0-bc02-4df2-8007-c5bca7cc6f25/files/ba0238ea-e937-44ef-9df3-d157dca4c7b0.jpg', size: 'Средний', color: 'Розовый', occasion: 'Годовщина' },
    { id: 6, name: 'Королевская роза', category: 'Роза', price: 5500, image: 'https://cdn.poehali.dev/projects/168434d0-bc02-4df2-8007-c5bca7cc6f25/files/ba0238ea-e937-44ef-9df3-d157dca4c7b0.jpg', size: 'Средний', color: 'Красный', occasion: 'Романтика' },
    { id: 7, name: 'Нежность в корзине', category: 'Корзины', price: 7000, image: 'https://cdn.poehali.dev/projects/168434d0-bc02-4df2-8007-c5bca7cc6f25/files/80724744-f41c-41ca-8dea-87b6d7d82b10.jpg', size: 'Средний', color: 'Пастель', occasion: 'День Рождения' },
    { id: 8, name: 'Монобукет пионов', category: 'МоноБукеты', price: 6500, image: 'https://cdn.poehali.dev/projects/168434d0-bc02-4df2-8007-c5bca7cc6f25/files/ba0238ea-e937-44ef-9df3-d157dca4c7b0.jpg', size: 'Средний', color: 'Розовый', occasion: 'Признание' },
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'Все' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const sizeMatch = selectedSize === 'Все' || product.size === selectedSize;
    const colorMatch = selectedColor === 'Все' || product.color === selectedColor;
    const occasionMatch = selectedOccasion === 'Все' || product.occasion === selectedOccasion;
    
    return categoryMatch && priceMatch && sizeMatch && colorMatch && occasionMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-5xl font-serif font-bold text-center text-foreground mb-2">Fleur Élégante</h1>
          <p className="text-center text-muted-foreground">Изысканные букеты премиум-класса</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap transition-all hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        <Card className="p-6 mb-8 animate-fade-in">
          <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
            <Icon name="SlidersHorizontal" size={24} />
            Фильтры
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium mb-3">
                Цена: {priceRange[0]} ₽ - {priceRange[1]} ₽
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={0}
                max={15000}
                step={500}
                className="mb-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Размер</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Все">Все размеры</SelectItem>
                  <SelectItem value="Маленький">Маленький</SelectItem>
                  <SelectItem value="Средний">Средний</SelectItem>
                  <SelectItem value="Большой">Большой</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Цвет</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Все">Все цвета</SelectItem>
                  <SelectItem value="Белый">Белый</SelectItem>
                  <SelectItem value="Розовый">Розовый</SelectItem>
                  <SelectItem value="Красный">Красный</SelectItem>
                  <SelectItem value="Пастель">Пастель</SelectItem>
                  <SelectItem value="Микс">Микс</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Случай</label>
              <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Все">Все случаи</SelectItem>
                  <SelectItem value="День Рождения">День Рождения</SelectItem>
                  <SelectItem value="Свадьба">Свадьба</SelectItem>
                  <SelectItem value="Юбилей">Юбилей</SelectItem>
                  <SelectItem value="Признание">Признание</SelectItem>
                  <SelectItem value="Годовщина">Годовщина</SelectItem>
                  <SelectItem value="Романтика">Романтика</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <div className="mb-4 text-muted-foreground">
          Найдено букетов: {filteredProducts.length}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm">{product.category}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-serif font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Icon name="Ruler" size={16} />
                  <span>{product.size}</span>
                  <span className="text-border">•</span>
                  <Icon name="Palette" size={16} />
                  <span>{product.color}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-accent">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <Button size="sm" className="group-hover:scale-110 transition-transform">
                    <Icon name="ShoppingCart" size={18} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <Icon name="SearchX" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-serif font-semibold mb-2">Букеты не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры фильтров</p>
          </div>
        )}
      </div>

      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">© 2024 Fleur Élégante. Цветы премиум-класса с доставкой</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
