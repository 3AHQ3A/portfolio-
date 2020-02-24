class ItemView extends BaseView {
	update() {
		let html = '';

		switch (this.model.getId()) {
			case 'RT70': //mouses
				html += `'
				    <div class="item-page"><img src="img/goods/RT70/RT70-1.png" class="itemImage left">
					<img src="img/goods/RT70/RT70-2.png" class="itemImage right">
					<div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
                    <p>Память: 160 К</p>
                    <p>Ускорение: 20 g~23 g</p>
                    <p>Частота кадров: 6666 FPS</p>
                    <p>Макс.разрешение: 4000 CPI</p>
                    <p>Время отклика: 0.2 мс</p>
                    <p>Оптический скролл: свыше 1 млн. оборотов</p>
                    <p>Скорость отслеживания: 60~160 дюймов/сек</p>
                    <p>Скорость обработки: 2.41 Мпикс/сек</p>
                    <p>Металлические ножки: свыше 300 км</p>
                    <p>Оптические переключатели: свыше 20 млн кликов</p>
                    <p>Частота опроса: 125~500 Гц</p>
                    <p>Тип: беспроводная</p>
                    <p>Количество кнопок: 9</p>
                    <p>Сенсор: оптический</p>
                    <p>Интерфейс: USB(2.0/ 3.0)</p>
                    <p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="RT70" data-category="mouses"></div>'`;
				break;
			case 'RT50':
				html += `'
				    <div class="item-page"><img src="img/goods/RT50/RT50-1.png" class="itemImage left">
					<img src="img/goods/RT50/RT50-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
                    <p>Память: 160 К</p>
                    <p>Ускорение: 20 g~23 g</p>
                    <p>Частота кадров: 6666 FPS</p>
                    <p>Макс.разрешение: 4000 CPI</p>
                    <p>Время отклика: 0.2 мс</p>
                    <p>Оптический скролл: свыше 1 млн. оборотов</p>
                    <p>Скорость отслеживания: 60~160 дюймов/сек</p>
                    <p>Скорость обработки: 2.41 Мпикс/сек</p>
                    <p>Металлические ножки: свыше 300 км</p>
                    <p>Оптические переключатели: свыше 20 млн кликов</p>
                    <p>Частота опроса: 125~500 Гц</p>
                    <p>Тип: беспроводная</p>
                    <p>Количество кнопок: 9</p>
                    <p>Сенсор: оптический</p>
                    <p>Интерфейс: USB(2.0/ 3.0)</p>
                    <p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="RT50" data-category="mouses"></div>'`;
				break;
			case 'R30':
				html += `'
				    <div class="item-page"><img src="img/goods/R30/R30-1.png" class="itemImage left">
					<img src="img/goods/R30/R30-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
				    <p>Память: 160 Кб</p>
				    <p>Ускорение: 20 g~23 g</p>
				    <p>Частота кадров: 6666 FPS</p>
				    <p>Макс.разрешение: 4000 CPI</p>
				    <p>Время отклика: 0.2 мс</p>
				    <p>Оптический скролл: свыше 1 млн. оборотов</p>
				    <p>Скорость отслеживания: 60~160 дюймов/сек</p>
				    <p>Скорость обработки: 2.41 Мпикс/сек</p>
				    <p>Металлические ножки: свыше 300 км</p>
				    <p>Оптические переключатели: свыше 20 млн кликов</p>
				    <p>Частота опроса: 125~500 Гц</p>
				    <p>Вес: 175 г</p>
				    <p>Тип: беспроводная</p>
				    <p>Количество кнопок: 8</p>
				    <p>Сенсор: оптический</p>
				    <p>Интерфейс: USB(2.0/ 3.0)</p>
				    <p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
				    <p><img class="ToCartButton" src="img/ButtonKart.png" data-item-id="R30" data-category="mouses"></div>'`;
				break;
			case 'TL90':
				html += `'
				    <div class="item-page"><img src="img/goods/TL90/TL90-1.png" class="itemImage left">
					<img src="img/goods/TL90/TL90-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
		            <p>Память: 160 Кб</p>
                    <p>Ускорение: 30 g</p>
                    <p>Частота кадров: 12000 FPS</p>
                    <p>Макс.разрешение: 8200 CPI (5 уровней регулирования)</p>
                    <p>Время отклика: 0.2 мс</p>
                    <p>Оптический скролл: свыше 1 млн. оборотов</p>
                    <p>Скорость отслеживания: 150 дюймов/сек</p>
                    <p>Скорость обработки: 10.8 Мпикс/сек</p>
                    <p>Металлические ножки: свыше 300 км</p>
                    <p>Оптические переключатели: свыше 20 млн кликов</p>
                    <p>Частота опроса: 125~1000 Гц</p>
                    <p>Тип: проводная</p>
                    <p>Количество кнопок: 9</p>
                    <p>Вес: 150 г</p>
                    <p>Длина кабеля: 1.8 м</p>
                    <p>Сенсор: лазерный</p>
                    <p>Интерфейс: USB(2.0/ 3.0)</p>
                    <p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="TL90" data-category="mouses"></div>'`;
				break;
			case 'ZL50':
				html += `'
				    <div class="item-page"><img src="img/goods/ZL50/ZL50-1.png" class="itemImage left">
					<img src="img/goods/ZL50/ZL50-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
				    <p>Память: 160 Кб</p>
				    <p>Ускорение: 30 g</p>
				    <p>Частота кадров: 12000 FPS</p>
				    <p>Макс.разрешение: 8200 CPI (5 уровней регулирования)</p>
				    <p>Время отклика: 0.2 мс</p>
				    <p>Оптический скролл: свыше 1 млн. оборотов</p>
				    <p>Скорость отслеживания: 150 дюймов/сек</p>
				    <p>Скорость обработки: 10.8 Мпикс/сек</p>
				    <p>Металлические ножки: свыше 300 км</p>
				    <p>Оптические переключатели: свыше 20 млн кликов</p>
				    <p>Частота опроса: 125~1000 Гц</p>
				    <p>Тип: проводная</p>
				    <p>Количество кнопок: 11</p>
				    <p>Длина кабеля: 1.8 м</p>
				    <p>Сенсор: лазерный</p>
				    <p>Интерфейс: USB(2.0/ 3.0)</p>
				    <p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
				    <p><img class="ToCartButton" src="img/ButtonKart.png" data-item-id="ZL50" data-category="mouses"></div>'`;
				break;
			case 'ML160':
				html += `'
				    <div class="item-page"><img src="img/goods/ML160/ML160-1.png" class="itemImage left">
					<img src="img/goods/ML160/ML160-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
				    </p>Память: 160 Кб</p>
                    </p>Ускорение: 30 g</p>
                    </p>Частота кадров: 12000 FPS</p>
                    </p>Макс.разрешение: 8200 CPI (5 уровней регулирования)</p>
                    </p>Время отклика: 0.2 мс</p>
                    </p>Оптический скролл: свыше 1 млн. оборотов</p>
                    </p>Скорость отслеживания: 150 дюймов/сек</p>
                    </p>Скорость обработки: 10.8 Мпикс/сек</p>
                    </p>Металлические ножки: свыше 300 км</p>
                    </p>Оптические переключатели: свыше 20 млн кликов</p>
                    </p>Частота опроса: 125~1000 Гц</p>
                    </p>Тип: проводная</p>
                    </p>Количество кнопок: 17</p>
                    </p>Вес: 160 г</p>
                    </p>Длина кабеля: 1.8 м</p>
                    </p>Сенсор: лазерный</p>
                    </p>Интерфейс: USB(2.0/ 3.0)</p>
                    </p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="ML160" data-category="mouses"></div>'`;
				break;
			case 'G501': //headphones
				html += `'
				    <div class="item-page"><img src="img/goods/G501/G501-1.png" class="itemImage left">
					<img src="img/goods/G501/G501-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
					<p>НАУШНИКИ</p>
                    <p>Диаметр мембраны излучателей: 40 мм</p>
                    <p>Импеданс: 32 Ом</p>
                    <p>Чувствительность: 100 дБ</p>
                    <p>Частотный диапазон: 20 Гц - 20 КГц</p>
                    <br>
                    <p>МИКРОФОН</p>
                    <p>Частотный диапазон: 50 Гц-16 КГц</p>
                    <p>Чувствительность: -58 дБ</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="G501" data-category="headphones"></div>'`;
				break;
			case 'G530':
				html += `'
				    <div class="item-page"><img src="img/goods/G530/G530-1.png" class="itemImage" style="text-align: center">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
                    <p>НАУШНИКИ</p>
                    <p>Динамики: 50 мм с неодимовым магнитом</p>
                    <p>Частотный диапазон: 20 Гц - 20 КГц</p>
                    <p>Чувствительность: 105 дБ</p>
                    <p>Импеданс: 16 Ом</p>
                    <br>
                    <p>МИКРОФОН</p>
                    <p>Частотный диапазон: 100 Гц -15 КГц</p>
                    <p>Чувствительность: -45 дБ</p>
                    <br>
                    <p>КАБЕЛЬ</p>
                    <p>1.8 м неспутывающийся USB-кабель</p>
                    <p>USB-разъем</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="G530" data-category="headphones"></div>'`;
				break;
			case 'G437':
				html += `'
				    <div class="item-page"><img src="img/goods/G437/G437-1.png" class="itemImage left">
					<img src="img/goods/G437/G437-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
			        <p>НАУШНИКИ</p>
                    <p>Динамики: 40 мм с неодимовым магнитом</p>
                    <p>Частотный диапазон: 20 Гц - 20 КГц</p>
                    <p>Чувствительность: 100 дБ</p>
                    <p>Импеданс: 32 Ом</p>
                    <br>
                    <p>МИКРОФОН</p>
                    <p>Частотный диапазон: 100 Гц -15 КГц</p>
                    <p>Чувствительность: -45 дБ</p>
                    <br>
                    <p>КАБЕЛЬ</p>
                    <p>2.2 м неспутывающийся USB-кабель</p>
                    <p>USB-разъем</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="G437" data-category="headphones"></div>'`;
				break;
			case 'G528C':
				html += `'
				    <div class="item-page"><img src="img/goods/G528C/G528C-1.png" class="itemImage left">
					<img src="img/goods/G528C/G528C-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
			        <p>Гарнитура</p>
                    <p>Динамики: 50 мм с неодимовым магнитом</p>
                    <p>Частотный диапазон: 20 Гц - 20 КГц</p>
                    <p>Чувствительность: 105 дБ</p>
                    <p>Импеданс: 16 Ом</p>
                    <p>Неоновый эффект: переливающаяся RGB-подсветка</p>
                    <br>
                    <p>Микрофон</p>
                    <p>Частотный диапазон: 100 Гц -10 КГц</p>
                    <p>Чувствительность: -33 дБ</p>
                    <br>
                    <p>Cables</p>
                    <p>2.0 м прочный плетеный кабель</p>
                    <p>USB-разъем</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="G528C" data-category="headphones"></div>'`;
				break;
			case 'M615':
				html += `'
				    <div class="item-page"><img src="img/goods/M615/M615-1.png" class="itemImage left">
					<img src="img/goods/M615/M615-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
				    <p>НАУШНИКИ</p>
                    <p>Размер динамиков: 40мм</p>
                    <p>Импеданс: 16 Ом ± 20%</p>
                    <p>Чувствительность: 102 дБ ± 3 дБ</p>
                    <p>Частотный диапазон: 20 Гц - 20 КГц</p>
                    <br>
                    <p>МИКРОФОН</p>
                    <p>Частотный диапазон: 75 Гц -16 кГц</p>
                    <p>Чувствительность: -45 дБ</p>
                    <br>
                    <p>КАБЕЛЬ</p>
                    <p>Материал: 48-жильный медный кабель</p>
                    <p>Основной разъем: коннектор 3.5 мм (Аудио/Микрофон)</p>
                    <p>Длина основного кабеля: 1.3 м+1м</p>
                    <p>Кабель-удлинитель аудио: 100 см</p>
                    <p>USB кабель-удлинитель: 100 см</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="M615" data-category="headphones"></div>'`;
				break;
			case 'M660':
				html += `'
				    <div class="item-page"><img src="img/goods/M660/M660-1.png" class="itemImage left">
					<img src="img/goods/M660/M660-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
	                <p>НАУШНИКИ</p>
                    <p>Диаметр мембраны излучателей: 40 мм</p>
                    <p>Импеданс: 16 Ом</p>
                    <p>Чувствительность: 102 дБ ± 3 дБ</p>
                    <p>Частотный диапазон: 20 Гц - 20 КГц</p>
                    <br>
                    <p>МИКРОФОН</p>
                    <p>Частотный диапазон: 75 Гц-16 КГц</p>
                    <p>Чувствительность: - 45 дБ</p>
                    <br>
                    <p>КАБЕЛЬ</p>
                    <p>Материал: 48-жильный медный кабель</p>
                    <p>Тип разъема основного кабеля: 3,5 мм (Аудио/Микрофон)</p>
                    <p>Длина основного кабеля: 120 см</p>
                    <p>Длина LED USB кабеля: 100 см</p>
                    <p>Длина 3.5 mm кабеля-адаптера к ПК: 100 см</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="M660" data-category="headphones"></div>'`;
				break;
			case 'B800': //keyboards
				html += `'
				    <div class="item-page"><img src="img/goods/B800/B800-1.png" class="itemImage left">
					<img src="img/goods/B800/B800-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
					<p>Интерфейс: USB</p>
				    <p>Время отклика: 0.2 мс</p>
				    <p>Тип переключателей: оптические</p>
				    <p>Игровые клавиши: 8 пластиковых (ABS) клавиш</p>
				    <p>Кнопки Anti-Ghost: все клавиши</p>
				    <p>Мультимедийные горячие клавиши</p>
				    <p>Подсветка: оранжевая</p>
				    <p>Яркость подсветки: регулируемая</p>
				    <p>Пробел: усиленный</p>
				    <p>Длина кабеля: 1.8 м</p>
				    <p>Ресурс кнопок: до 100 млн. нажатий</p>
				    <p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
				    <p><img class="ToCartButton" src="img/ButtonKart.png" data-item-id="B800" data-category="keyboards"></div>'`;
				break;
			case 'B2278':
				html += `'
				    <div class="item-page"><img src="img/goods/B2278/B2278-1.png" class="itemImage left">
					<img src="img/goods/B2278/B2278-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
			        <p>Интерфейс: USB</p>
                    <p>Время отклика: 0.2 мс</p>
                    <p>Оптические переключатели: Q/W/E/R/A/S/D/F</p>
                    <p>Игровые клавиши: 8 пластиковых (ABS) клавиш</p>
                    <p>Мультимедийные горячие клавиши</p>
                    <p>Подсветка: красная</p>
                    <p>Влагозащита: двойная</p>
                    <p>Пробел: усиленный</p>
                    <p>Длина кабеля: 1.8 м</p>
                    <p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
					<img class="ToCartButton" src="img/ButtonKart.png" data-item-id="B2278" data-category="keyboards"></div>'`;
				break;
			case 'B720':
				html += `'
				    <div class="item-page"><img src="img/goods/B720/B720-1.png" class="itemImage left">
					<img src="img/goods/B720/B720-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
	                <p>Интерфейс: USB</p>
                    <p>Время отклика: 0.2 мс</p>
                    <p>Тип переключателей: оптические</p>
                    <p>Игровые клавиши: 8 силиконовых кнопок</p>
                    <p>Кнопки Anti-Ghost: все клавиши</p>
                    <p>Мультимедийные горячие клавиши</p>
                    <p>Подсветка: оранжевая, желтая, зеленая, синяя, красная, розовая</p>
                    <p>Яркость подсветки: регулируемая</p>
                    <p>Влагозащита: максимальная, включая разлив жидкости</p>
                    <p>Пробел: усиленный</p>
                    <p>Длина кабеля: 1.8 м</p>
                    <p>Ресурс кнопок: до 100 млн. нажатий</p>
                    <p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="B720" data-category="keyboards"></div>'`;
				break;
			case 'B125':
				html += `'
				    <div class="item-page"><img src="img/goods/B125/B125-1.png" class="itemImage left">
					<img src="img/goods/B125/B125-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
	                <p>Интерфейс: USB</p>
                    <p>Время отклика: 1 мс</p>
                    <p>Оптические переключатели: W/A/S/D</p>
                    <p>Подсветка：Красная</p>
                    <p>Влагозащита: двойная</p>
                    <p>Пробел: усиленный</p>
                    <p>Длина кабеля: 1.8 м</p>
                    <p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="B125" data-category="keyboards"></div>'`;
				break;
			case 'B314':
				html += `'
				    <div class="item-page"><img src="img/goods/B314/B314-1.png" class="itemImage left">
					<img src="img/goods/B314/B314-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
				    <p>Интерфейс: USB</p>
                    <p>Время отклика: 0.2 мс</p>
                    <p>Оптические переключатели: W/A/S/D</p>
                    <p>Игровые клавиши: 4 пластиковых (ABS) клавиш</p>
                    <p>Мультимедийные горячие клавиши</p>
                    <p>Подсветка: синяя, зеленая, бирюзовая</p>
                    <p>Влагозащита: двойная</p>
                    <p>Пробел: усиленный</p>
                    <p>Длина кабеля: 1.8 м</p>
                    <p>Системные требования: Windows XP/ Vista/ 7/ 8 /8.1 / 10 и более поздние версии</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="B314" data-category="keyboards"></div>'`;
				break;
			case 'B880R':
				html += `'
				    <div class="item-page"><img src="img/goods/B880R/B880R-1.png" class="itemImage left">
					<img src="img/goods/B880R/B880R-2.png" class="itemImage right">
				    <div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
				    <p>Интерфейс: USB</p>
                    <p>Время отклика: 0.2 мс</p>
                    <p>Тип переключателей: оптические</p>
                    <p>Количество игровых клавиш: 8 пластиковых (ABS) клавиш</p>
                    <p>Кнопки Anti-Ghost: все клавиши</p>
                    <p>Мультимедийные горячие клавиши</p>
                    <p>Подсветка: настраиваемая RGB-анимация</p>
                    <p>Яркость подсветки: регулируемая</p>
                    <p>Пробел: усиленный</p>
                    <p>6 профилей подсветки установлены по умолчанию</p>
                    <p>Ресурс клавиш: до 100 млн. нажатий</p>
                    <p>Частота опроса: 1000 Гц/сек</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="B880R" data-category="keyboards"></div>'`;
				break;
			case 'B-080': //mousepads
				html += `'
				    <div class="item-page"><img src="img/goods/B-080/B-080-1.png" class="itemImage left">
					<div class="list right" style="margin-top: 50px"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
	                <p>Материал: текстиль</p>
                    <p>Материал основы: резина</p>
                    <p>Нескользящая основа</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="B-080" data-category="mousepads"></div>'`;
				break;
			case 'B-088S':
				html += `'
				    <div class="item-page"><img src="img/goods/B-088S/B-088S-1.png" class="itemImage left">
					<img src="img/goods/B-088S/B-088S-2.png" class="itemImage right">
					<div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
					<p>Материал: текстиль</p>
					<p>Размеры: 800 х 300 х 2.0 мм</p>
                    <p>Материал основы: резина</p>
                    <p>Нескользящая основа</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="B-088S" data-category="mousepads"></div>'`;
				break;
			case 'B-070':
				html += `'
				    <div class="item-page"><img src="img/goods/B-070/B-070-1.jpg" class="itemImage left">
					<img src="img/goods/B-070/B-070-2.jpg" class="itemImage right">
					<div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
                    <p>Материал: текстиль</p>
                    <p>Материал основы: резина</p>
                    <p>Нескользящая основа</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="B-070" data-category="mousepads"></div>'`;
				break;
			case 'MP-80N':
				html += `'
				    <div class="item-page"><img src="img/goods/MP-80N/MP-80N-1.png" class="itemImage left">
					<img src="img/goods/MP-80N/MP-80N-2.png" class="itemImage right">
					<div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
	                <p>MP-50NS:</p>
                    <p>Неоновые световые эффекты</p>
                    <p>6 светодиодных компонентов</p>
                    <p>Тканевая поверхность</p>
                    <p>Нескользящая резиновая основа</p>
                    <p>Неспутывающийся кабель</p>
                    <p>Системные требования:Windows XP / Vista / Windows 7 / Windows8 / 8.1 / 10</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="MP-80N" data-category="mousepads"></div>'`;
				break;
			case 'MP-60R':
				html += `'
				    <div class="item-page"><img src="img/goods/MP-60R/MP-60R-1.png" class="itemImage left">
					<img src="img/goods/MP-60R/MP-60R-2.png" class="itemImage right">
					<div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
	                <p>Тонкая текстурная ткань</p>
                    <p>16.8 млн. цветовых вариантов</p>
                    <p>Нескользящая резиновая основа</p>
                    <p>10 светодиодных компонентов RGB</p>
                    <p>Память 160K на плате</p>
                    <p>Ультрамягкая и гладкая ткань</p>
                    <p>10 предустановленных эффектов RGB-подсветки (бесплатно)</p>
                    <p>Размеры: 354мм(Д) 256мм(Ш) 2.6мм(В)</p>
                    <p>Системные требования: Windows XP / Vista / Windows7 / Windows8 / 8.1 / 10</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="MP-60R" data-category="mousepads"></div>'`;
				break;
			case 'MP-50NS':
				html += `'
				    <div class="item-page"><img src="img/goods/MP-50NS/MP-50NS-1.png" class="itemImage left">
					<img src="img/goods/MP-50NS/MP-50NS-2.png" class="itemImage right">
					<div class="list"><p style="color: white">ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:</p>
                    <p>16.8 млн. цветовых вариантов</p>
                    <p>10 предустановленных эффектов RGB-подсветки</p>
                    <p>10 светодиодных компонентов RGB</p>
                    <p>Память 160K на плате</p>
                    <p>Тонкая текстурная ткань</p>
                    <p>Ультрамягкая и гладкая ткань</p>
                    <p>Нескользящая резиновая основа</p>
                    <p>Системные требования: Windows XP/Vista/Windows7/Windows8/8.1/10</p></div>
				    <img class="ToCartButton" src="img/ButtonKart.png" data-item-id="MP-50NS" data-category="mousepads"></div>'`;
				break;
		}
		this.container.innerHTML = html;
	}
}