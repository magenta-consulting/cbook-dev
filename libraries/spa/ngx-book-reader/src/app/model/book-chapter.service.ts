import { Injectable } from '@angular/core';
import { BookChapter } from "../model/book-chapter";

@Injectable({
  providedIn: 'root'
})
export class BookChapterService {
  readonly CHAPTERS: BookChapter[] = [
    {
      id: 1,
      name: "1. Foreward",
      content: "<p style=\"margin-left:0in; margin-right:0in\">Welcome on board!</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">We are pleased to have you as a member in our big family, and we hope that you will enjoy the enriching, challenging and exciting journey in Cristofori Music Pte. Ltd. (&ldquo;the Company&rdquo;) for the 21st Century.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">Our Handbook has been prepared to provide you with a deeper understanding of our corporate vision, mission, core values, education philosophy and company&rsquo;s expectation on your behaviour, attitude and work performance. Other general policies, benefits and career development can also be found in this handbook.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">By reading this Handbook, we hope that you would find it useful to adapt to our culture, understand the nature of your working condition and our expectations from you.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">As Cristofori continues to grow and expand, we reserve the right to revise, supplement or amend any policy or portion of the handbook as it deems appropriate, in its sole and absolute discretion.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">We invite you to share any questions and/or feedbacks about your working life in Cristofori Music. Our HR Department is concerned not only about your wellbeing but also your personal growth and development in our company.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">Warmest regards,</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>JB Wong</strong></p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><em>Managing Director</em></p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><em><img alt=\"\" src=\"/media/view-binary/2/book_image_big\" style=\"height:198px; width:499px\" /></em></p>",
      position: 0,
      parent: null,
      children: [

      ]
    },
    {
      id: 2,
      name: "2. Cristofori Growth & Achievement",
      content: "<p style=\"margin-left:0in; margin-right:0in\">Cristofori Music started its business in 1980 as a piano technical service provider and retailer of second-hand pianos.&nbsp; Our aim was to service and tune all household and school pianos at international standards after realizing that most of the pianos in Singapore, especially low-price pianos, were not well maintained and tuned.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">At the same time, we also imported and successfully marketed the CRISTOFORI brand of pianos.&nbsp; This marked the beginning of a great homegrown brand, with a mission to offer quality pianos at the lowest possible price to local households.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 1983</strong>, we started our first music school to conduct music lessons with the aim of popularising piano learning and spread music to all households.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 1986</strong>, we registered CRISTOFORI as a trademark in Singapore.&nbsp; We gradually expanded our business through the 90&rsquo;s, and established CRISTOFORI as a leading company in the retailing of musical instruments and provision of music education.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>By </strong><strong>year</strong><strong> 2000</strong>, Cristofori Music has become a well-known homegrown brand.&nbsp; Our business and achievements encompasses the following:</p>\r\n\r\n<ul>\r\n\t<li>Offer a complete range of CRISTOFORI brand piano, from academic models to examination models to concert models, which are made by the world&rsquo;s most established and prestigious piano manufacturers from Japan, German, Korea and China, assuring customers the highest piano quality in tone, touch, durability, tuning stability and appearance.</li>\r\n</ul>\r\n\r\n<p><strong>We are the sole agents of </strong><strong>world renowned</strong><strong> brands from</strong></p>\r\n\r\n<ul>\r\n\t<li>Germany brand piano: C.Bechstein, Seiler, Ronisch, W.Hoffmann</li>\r\n\t<li>Japan brand piano: Toyo-Apollo, Suzuki, Asahi</li>\r\n\t<li>Korea brand piano: Young Chang, Samick</li>\r\n\t<li>China brand piano: Pearl River, Xinghai and Nordiska</li>\r\n\t<li>Other world-renowned brand: Albert Weber, Knabe, Niemeyer</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p><strong>Tremendous achievement from collaboration with Associated Board of Royal Schools of Music (ABRSM), London, from teachers&rsquo; training to providing music studios as exam </strong><strong>centre</strong><strong>.</strong></p>\r\n\r\n<ul>\r\n\t<li>Successfully develop Cristofori Music&rsquo;s education philosophy by applying &ldquo;Whole Person Theory&rdquo; and Humanity Education approach in music lessons that focus on developing the Academic skills (Mental) and Learning skill (Emotional) of students.&nbsp; In this theory, the student sustains his learning with an Awareness of how he learns (Spiritual).</li>\r\n\t<li>Actively support society through our Community Involvement Program whereby our teachers and staff regularly perform charity work at designated charity organisations to spread the love and joy of music to the society.</li>\r\n\t<li>Provide ample opportunities and avenues for students and teachers to showcase their talent and potential through organising annual events as follows:\r\n\t<ul>\r\n\t\t<li>Music Competition</li>\r\n\t\t<li>Creative Fest</li>\r\n\t\t<li>Musicale &ndash; Annual Student Concert cum Awards Presentation</li>\r\n\t\t<li>Intermezzo &ndash; Annual Teacher Concert</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2000</strong>, the company registered CRISTOFORI trademark in Malaysia, Indonesia and China.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2003</strong>, the CRISTOFORI trademark was authenticated in China government.&nbsp; This paved way for our expansion project in China starting from 2004 and the setup of a violin workshop there in 2005.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>By 2007</strong>, the violin workshop has been further expanded to become a modernised factory that produces high quality violin for overseas markets.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2008</strong>, the company opens a flagship showroom in Beijing, China, introducing CRISTOFORI brand pianos and instruments to the China market.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2010</strong>, Cristofori Music has sold over 30,000 pianos, has provided music lessons to more than 50,000 students and operated 30 music centres in Singapore.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2011</strong>, the company expanded its overseas network to Kuala Lumpur, Malaysia. Our goal is to become an outstanding and prestigious music company in Singapore and the world with CRISTOFORI as the most trusted brand in piano, violin, guitar, other classical instruments, and music education.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2013</strong>, Cristofori was awarded the Singapore Prestige Brand Award (SPBA) &ndash; Heritage Brand Winner, in recognition of over 25 years in the market. The award recognises companies based on their brand heritage and identity, brand strategic blueprint &amp; brand development and performance. SPBA is jointly organised by the Association of Small and Medium Enterprise (ASME) and Lianhe Zhaobao</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2014</strong>, CRISTOFORI Music was honored the Singapore Heartland Enterprise Star Award, which was a testimonial of relentless effort to bring music to everyone. CRISTOFORI Music was awarded for being the most franchisable business in the prominent enterprise category for its scalable business model. Besides, CRISTOFORI Music is applauded for its well-thought-out business model and outstanding intellectual property with 16,000 student numbers.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2015</strong>, CRISTOFORI music is honoured with the award Influential Brands Top Brand Winner in music category. With the aim to popularize music into every household, CRISTOFORI Music School is now Singapore&rsquo;s largest music company with more than 30 music centres with the strength of 16,000 students. The company has gradually expanded the business and has strengthened the status of leading company in retailing of musical instruments and providing music education. CRISTOFORI Music is awarded 2015 Top Franchise Brand as well with a vision to transform Singapore into the Renaissance City of Asia through music.</p>",
      position: 0,
      parent: null,
      children: [
        {
          id: 3,
          name: "2.1. Cristofori Growth & Achievement",
          content: "<p style=\"margin-left:0in; margin-right:0in\">Cristofori Music started its business in 1980 as a piano technical service provider and retailer of second-hand pianos.&nbsp; Our aim was to service and tune all household and school pianos at international standards after realizing that most of the pianos in Singapore, especially low-price pianos, were not well maintained and tuned.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">At the same time, we also imported and successfully marketed the CRISTOFORI brand of pianos.&nbsp; This marked the beginning of a great homegrown brand, with a mission to offer quality pianos at the lowest possible price to local households.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 1983</strong>, we started our first music school to conduct music lessons with the aim of popularising piano learning and spread music to all households.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 1986</strong>, we registered CRISTOFORI as a trademark in Singapore.&nbsp; We gradually expanded our business through the 90&rsquo;s, and established CRISTOFORI as a leading company in the retailing of musical instruments and provision of music education.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>By </strong><strong>year</strong><strong> 2000</strong>, Cristofori Music has become a well-known homegrown brand.&nbsp; Our business and achievements encompasses the following:</p>\r\n\r\n<ul>\r\n\t<li>Offer a complete range of CRISTOFORI brand piano, from academic models to examination models to concert models, which are made by the world&rsquo;s most established and prestigious piano manufacturers from Japan, German, Korea and China, assuring customers the highest piano quality in tone, touch, durability, tuning stability and appearance.</li>\r\n</ul>\r\n\r\n<p><strong>We are the sole agents of </strong><strong>world renowned</strong><strong> brands from</strong></p>\r\n\r\n<ul>\r\n\t<li>Germany brand piano: C.Bechstein, Seiler, Ronisch, W.Hoffmann</li>\r\n\t<li>Japan brand piano: Toyo-Apollo, Suzuki, Asahi</li>\r\n\t<li>Korea brand piano: Young Chang, Samick</li>\r\n\t<li>China brand piano: Pearl River, Xinghai and Nordiska</li>\r\n\t<li>Other world-renowned brand: Albert Weber, Knabe, Niemeyer</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p><strong>Tremendous achievement from collaboration with Associated Board of Royal Schools of Music (ABRSM), London, from teachers&rsquo; training to providing music studios as exam </strong><strong>centre</strong><strong>.</strong></p>\r\n\r\n<ul>\r\n\t<li>Successfully develop Cristofori Music&rsquo;s education philosophy by applying &ldquo;Whole Person Theory&rdquo; and Humanity Education approach in music lessons that focus on developing the Academic skills (Mental) and Learning skill (Emotional) of students.&nbsp; In this theory, the student sustains his learning with an Awareness of how he learns (Spiritual).</li>\r\n\t<li>Actively support society through our Community Involvement Program whereby our teachers and staff regularly perform charity work at designated charity organisations to spread the love and joy of music to the society.</li>\r\n\t<li>Provide ample opportunities and avenues for students and teachers to showcase their talent and potential through organising annual events as follows:\r\n\t<ul>\r\n\t\t<li>Music Competition</li>\r\n\t\t<li>Creative Fest</li>\r\n\t\t<li>Musicale &ndash; Annual Student Concert cum Awards Presentation</li>\r\n\t\t<li>Intermezzo &ndash; Annual Teacher Concert</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2000</strong>, the company registered CRISTOFORI trademark in Malaysia, Indonesia and China.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2003</strong>, the CRISTOFORI trademark was authenticated in China government.&nbsp; This paved way for our expansion project in China starting from 2004 and the setup of a violin workshop there in 2005.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>By 2007</strong>, the violin workshop has been further expanded to become a modernised factory that produces high quality violin for overseas markets.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2008</strong>, the company opens a flagship showroom in Beijing, China, introducing CRISTOFORI brand pianos and instruments to the China market.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2010</strong>, Cristofori Music has sold over 30,000 pianos, has provided music lessons to more than 50,000 students and operated 30 music centres in Singapore.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2011</strong>, the company expanded its overseas network to Kuala Lumpur, Malaysia. Our goal is to become an outstanding and prestigious music company in Singapore and the world with CRISTOFORI as the most trusted brand in piano, violin, guitar, other classical instruments, and music education.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2013</strong>, Cristofori was awarded the Singapore Prestige Brand Award (SPBA) &ndash; Heritage Brand Winner, in recognition of over 25 years in the market. The award recognises companies based on their brand heritage and identity, brand strategic blueprint &amp; brand development and performance. SPBA is jointly organised by the Association of Small and Medium Enterprise (ASME) and Lianhe Zhaobao</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2014</strong>, CRISTOFORI Music was honored the Singapore Heartland Enterprise Star Award, which was a testimonial of relentless effort to bring music to everyone. CRISTOFORI Music was awarded for being the most franchisable business in the prominent enterprise category for its scalable business model. Besides, CRISTOFORI Music is applauded for its well-thought-out business model and outstanding intellectual property with 16,000 student numbers.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2015</strong>, CRISTOFORI music is honoured with the award Influential Brands Top Brand Winner in music category. With the aim to popularize music into every household, CRISTOFORI Music School is now Singapore&rsquo;s largest music company with more than 30 music centres with the strength of 16,000 students. The company has gradually expanded the business and has strengthened the status of leading company in retailing of musical instruments and providing music education. CRISTOFORI Music is awarded 2015 Top Franchise Brand as well with a vision to transform Singapore into the Renaissance City of Asia through music.</p>",
          position: 0,
          parent: null,
          children: [
            {
              id: 3,
              name: "2.1.1 Cristofori Growth & Achievement",
              content: "<p style=\"margin-left:0in; margin-right:0in\">Cristofori Music started its business in 1980 as a piano technical service provider and retailer of second-hand pianos.&nbsp; Our aim was to service and tune all household and school pianos at international standards after realizing that most of the pianos in Singapore, especially low-price pianos, were not well maintained and tuned.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">At the same time, we also imported and successfully marketed the CRISTOFORI brand of pianos.&nbsp; This marked the beginning of a great homegrown brand, with a mission to offer quality pianos at the lowest possible price to local households.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 1983</strong>, we started our first music school to conduct music lessons with the aim of popularising piano learning and spread music to all households.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 1986</strong>, we registered CRISTOFORI as a trademark in Singapore.&nbsp; We gradually expanded our business through the 90&rsquo;s, and established CRISTOFORI as a leading company in the retailing of musical instruments and provision of music education.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>By </strong><strong>year</strong><strong> 2000</strong>, Cristofori Music has become a well-known homegrown brand.&nbsp; Our business and achievements encompasses the following:</p>\r\n\r\n<ul>\r\n\t<li>Offer a complete range of CRISTOFORI brand piano, from academic models to examination models to concert models, which are made by the world&rsquo;s most established and prestigious piano manufacturers from Japan, German, Korea and China, assuring customers the highest piano quality in tone, touch, durability, tuning stability and appearance.</li>\r\n</ul>\r\n\r\n<p><strong>We are the sole agents of </strong><strong>world renowned</strong><strong> brands from</strong></p>\r\n\r\n<ul>\r\n\t<li>Germany brand piano: C.Bechstein, Seiler, Ronisch, W.Hoffmann</li>\r\n\t<li>Japan brand piano: Toyo-Apollo, Suzuki, Asahi</li>\r\n\t<li>Korea brand piano: Young Chang, Samick</li>\r\n\t<li>China brand piano: Pearl River, Xinghai and Nordiska</li>\r\n\t<li>Other world-renowned brand: Albert Weber, Knabe, Niemeyer</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p><strong>Tremendous achievement from collaboration with Associated Board of Royal Schools of Music (ABRSM), London, from teachers&rsquo; training to providing music studios as exam </strong><strong>centre</strong><strong>.</strong></p>\r\n\r\n<ul>\r\n\t<li>Successfully develop Cristofori Music&rsquo;s education philosophy by applying &ldquo;Whole Person Theory&rdquo; and Humanity Education approach in music lessons that focus on developing the Academic skills (Mental) and Learning skill (Emotional) of students.&nbsp; In this theory, the student sustains his learning with an Awareness of how he learns (Spiritual).</li>\r\n\t<li>Actively support society through our Community Involvement Program whereby our teachers and staff regularly perform charity work at designated charity organisations to spread the love and joy of music to the society.</li>\r\n\t<li>Provide ample opportunities and avenues for students and teachers to showcase their talent and potential through organising annual events as follows:\r\n\t<ul>\r\n\t\t<li>Music Competition</li>\r\n\t\t<li>Creative Fest</li>\r\n\t\t<li>Musicale &ndash; Annual Student Concert cum Awards Presentation</li>\r\n\t\t<li>Intermezzo &ndash; Annual Teacher Concert</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2000</strong>, the company registered CRISTOFORI trademark in Malaysia, Indonesia and China.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2003</strong>, the CRISTOFORI trademark was authenticated in China government.&nbsp; This paved way for our expansion project in China starting from 2004 and the setup of a violin workshop there in 2005.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>By 2007</strong>, the violin workshop has been further expanded to become a modernised factory that produces high quality violin for overseas markets.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2008</strong>, the company opens a flagship showroom in Beijing, China, introducing CRISTOFORI brand pianos and instruments to the China market.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2010</strong>, Cristofori Music has sold over 30,000 pianos, has provided music lessons to more than 50,000 students and operated 30 music centres in Singapore.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2011</strong>, the company expanded its overseas network to Kuala Lumpur, Malaysia. Our goal is to become an outstanding and prestigious music company in Singapore and the world with CRISTOFORI as the most trusted brand in piano, violin, guitar, other classical instruments, and music education.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2013</strong>, Cristofori was awarded the Singapore Prestige Brand Award (SPBA) &ndash; Heritage Brand Winner, in recognition of over 25 years in the market. The award recognises companies based on their brand heritage and identity, brand strategic blueprint &amp; brand development and performance. SPBA is jointly organised by the Association of Small and Medium Enterprise (ASME) and Lianhe Zhaobao</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2014</strong>, CRISTOFORI Music was honored the Singapore Heartland Enterprise Star Award, which was a testimonial of relentless effort to bring music to everyone. CRISTOFORI Music was awarded for being the most franchisable business in the prominent enterprise category for its scalable business model. Besides, CRISTOFORI Music is applauded for its well-thought-out business model and outstanding intellectual property with 16,000 student numbers.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2015</strong>, CRISTOFORI music is honoured with the award Influential Brands Top Brand Winner in music category. With the aim to popularize music into every household, CRISTOFORI Music School is now Singapore&rsquo;s largest music company with more than 30 music centres with the strength of 16,000 students. The company has gradually expanded the business and has strengthened the status of leading company in retailing of musical instruments and providing music education. CRISTOFORI Music is awarded 2015 Top Franchise Brand as well with a vision to transform Singapore into the Renaissance City of Asia through music.</p>",
              position: 0,
              parent: null,
              children: null
            },
            {
              id: 3,
              name: "2.1.2 Cristofori Growth & Achievement",
              content: "<p style=\"margin-left:0in; margin-right:0in\">Cristofori Music started its business in 1980 as a piano technical service provider and retailer of second-hand pianos.&nbsp; Our aim was to service and tune all household and school pianos at international standards after realizing that most of the pianos in Singapore, especially low-price pianos, were not well maintained and tuned.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">At the same time, we also imported and successfully marketed the CRISTOFORI brand of pianos.&nbsp; This marked the beginning of a great homegrown brand, with a mission to offer quality pianos at the lowest possible price to local households.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 1983</strong>, we started our first music school to conduct music lessons with the aim of popularising piano learning and spread music to all households.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 1986</strong>, we registered CRISTOFORI as a trademark in Singapore.&nbsp; We gradually expanded our business through the 90&rsquo;s, and established CRISTOFORI as a leading company in the retailing of musical instruments and provision of music education.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>By </strong><strong>year</strong><strong> 2000</strong>, Cristofori Music has become a well-known homegrown brand.&nbsp; Our business and achievements encompasses the following:</p>\r\n\r\n<ul>\r\n\t<li>Offer a complete range of CRISTOFORI brand piano, from academic models to examination models to concert models, which are made by the world&rsquo;s most established and prestigious piano manufacturers from Japan, German, Korea and China, assuring customers the highest piano quality in tone, touch, durability, tuning stability and appearance.</li>\r\n</ul>\r\n\r\n<p><strong>We are the sole agents of </strong><strong>world renowned</strong><strong> brands from</strong></p>\r\n\r\n<ul>\r\n\t<li>Germany brand piano: C.Bechstein, Seiler, Ronisch, W.Hoffmann</li>\r\n\t<li>Japan brand piano: Toyo-Apollo, Suzuki, Asahi</li>\r\n\t<li>Korea brand piano: Young Chang, Samick</li>\r\n\t<li>China brand piano: Pearl River, Xinghai and Nordiska</li>\r\n\t<li>Other world-renowned brand: Albert Weber, Knabe, Niemeyer</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p><strong>Tremendous achievement from collaboration with Associated Board of Royal Schools of Music (ABRSM), London, from teachers&rsquo; training to providing music studios as exam </strong><strong>centre</strong><strong>.</strong></p>\r\n\r\n<ul>\r\n\t<li>Successfully develop Cristofori Music&rsquo;s education philosophy by applying &ldquo;Whole Person Theory&rdquo; and Humanity Education approach in music lessons that focus on developing the Academic skills (Mental) and Learning skill (Emotional) of students.&nbsp; In this theory, the student sustains his learning with an Awareness of how he learns (Spiritual).</li>\r\n\t<li>Actively support society through our Community Involvement Program whereby our teachers and staff regularly perform charity work at designated charity organisations to spread the love and joy of music to the society.</li>\r\n\t<li>Provide ample opportunities and avenues for students and teachers to showcase their talent and potential through organising annual events as follows:\r\n\t<ul>\r\n\t\t<li>Music Competition</li>\r\n\t\t<li>Creative Fest</li>\r\n\t\t<li>Musicale &ndash; Annual Student Concert cum Awards Presentation</li>\r\n\t\t<li>Intermezzo &ndash; Annual Teacher Concert</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2000</strong>, the company registered CRISTOFORI trademark in Malaysia, Indonesia and China.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2003</strong>, the CRISTOFORI trademark was authenticated in China government.&nbsp; This paved way for our expansion project in China starting from 2004 and the setup of a violin workshop there in 2005.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>By 2007</strong>, the violin workshop has been further expanded to become a modernised factory that produces high quality violin for overseas markets.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2008</strong>, the company opens a flagship showroom in Beijing, China, introducing CRISTOFORI brand pianos and instruments to the China market.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2010</strong>, Cristofori Music has sold over 30,000 pianos, has provided music lessons to more than 50,000 students and operated 30 music centres in Singapore.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2011</strong>, the company expanded its overseas network to Kuala Lumpur, Malaysia. Our goal is to become an outstanding and prestigious music company in Singapore and the world with CRISTOFORI as the most trusted brand in piano, violin, guitar, other classical instruments, and music education.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2013</strong>, Cristofori was awarded the Singapore Prestige Brand Award (SPBA) &ndash; Heritage Brand Winner, in recognition of over 25 years in the market. The award recognises companies based on their brand heritage and identity, brand strategic blueprint &amp; brand development and performance. SPBA is jointly organised by the Association of Small and Medium Enterprise (ASME) and Lianhe Zhaobao</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2014</strong>, CRISTOFORI Music was honored the Singapore Heartland Enterprise Star Award, which was a testimonial of relentless effort to bring music to everyone. CRISTOFORI Music was awarded for being the most franchisable business in the prominent enterprise category for its scalable business model. Besides, CRISTOFORI Music is applauded for its well-thought-out business model and outstanding intellectual property with 16,000 student numbers.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2015</strong>, CRISTOFORI music is honoured with the award Influential Brands Top Brand Winner in music category. With the aim to popularize music into every household, CRISTOFORI Music School is now Singapore&rsquo;s largest music company with more than 30 music centres with the strength of 16,000 students. The company has gradually expanded the business and has strengthened the status of leading company in retailing of musical instruments and providing music education. CRISTOFORI Music is awarded 2015 Top Franchise Brand as well with a vision to transform Singapore into the Renaissance City of Asia through music.</p>",
              position: 0,
              parent: null,
              children: null
            }
          ]
        },
        {
          id: 4,
          name: "2.2. Cristofori Growth & Achievement",
          content: "<p style=\"margin-left:0in; margin-right:0in\">Cristofori Music started its business in 1980 as a piano technical service provider and retailer of second-hand pianos.&nbsp; Our aim was to service and tune all household and school pianos at international standards after realizing that most of the pianos in Singapore, especially low-price pianos, were not well maintained and tuned.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">At the same time, we also imported and successfully marketed the CRISTOFORI brand of pianos.&nbsp; This marked the beginning of a great homegrown brand, with a mission to offer quality pianos at the lowest possible price to local households.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 1983</strong>, we started our first music school to conduct music lessons with the aim of popularising piano learning and spread music to all households.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 1986</strong>, we registered CRISTOFORI as a trademark in Singapore.&nbsp; We gradually expanded our business through the 90&rsquo;s, and established CRISTOFORI as a leading company in the retailing of musical instruments and provision of music education.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>By </strong><strong>year</strong><strong> 2000</strong>, Cristofori Music has become a well-known homegrown brand.&nbsp; Our business and achievements encompasses the following:</p>\r\n\r\n<ul>\r\n\t<li>Offer a complete range of CRISTOFORI brand piano, from academic models to examination models to concert models, which are made by the world&rsquo;s most established and prestigious piano manufacturers from Japan, German, Korea and China, assuring customers the highest piano quality in tone, touch, durability, tuning stability and appearance.</li>\r\n</ul>\r\n\r\n<p><strong>We are the sole agents of </strong><strong>world renowned</strong><strong> brands from</strong></p>\r\n\r\n<ul>\r\n\t<li>Germany brand piano: C.Bechstein, Seiler, Ronisch, W.Hoffmann</li>\r\n\t<li>Japan brand piano: Toyo-Apollo, Suzuki, Asahi</li>\r\n\t<li>Korea brand piano: Young Chang, Samick</li>\r\n\t<li>China brand piano: Pearl River, Xinghai and Nordiska</li>\r\n\t<li>Other world-renowned brand: Albert Weber, Knabe, Niemeyer</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p><strong>Tremendous achievement from collaboration with Associated Board of Royal Schools of Music (ABRSM), London, from teachers&rsquo; training to providing music studios as exam </strong><strong>centre</strong><strong>.</strong></p>\r\n\r\n<ul>\r\n\t<li>Successfully develop Cristofori Music&rsquo;s education philosophy by applying &ldquo;Whole Person Theory&rdquo; and Humanity Education approach in music lessons that focus on developing the Academic skills (Mental) and Learning skill (Emotional) of students.&nbsp; In this theory, the student sustains his learning with an Awareness of how he learns (Spiritual).</li>\r\n\t<li>Actively support society through our Community Involvement Program whereby our teachers and staff regularly perform charity work at designated charity organisations to spread the love and joy of music to the society.</li>\r\n\t<li>Provide ample opportunities and avenues for students and teachers to showcase their talent and potential through organising annual events as follows:\r\n\t<ul>\r\n\t\t<li>Music Competition</li>\r\n\t\t<li>Creative Fest</li>\r\n\t\t<li>Musicale &ndash; Annual Student Concert cum Awards Presentation</li>\r\n\t\t<li>Intermezzo &ndash; Annual Teacher Concert</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\">&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2000</strong>, the company registered CRISTOFORI trademark in Malaysia, Indonesia and China.&nbsp;</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2003</strong>, the CRISTOFORI trademark was authenticated in China government.&nbsp; This paved way for our expansion project in China starting from 2004 and the setup of a violin workshop there in 2005.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>By 2007</strong>, the violin workshop has been further expanded to become a modernised factory that produces high quality violin for overseas markets.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2008</strong>, the company opens a flagship showroom in Beijing, China, introducing CRISTOFORI brand pianos and instruments to the China market.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2010</strong>, Cristofori Music has sold over 30,000 pianos, has provided music lessons to more than 50,000 students and operated 30 music centres in Singapore.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2011</strong>, the company expanded its overseas network to Kuala Lumpur, Malaysia. Our goal is to become an outstanding and prestigious music company in Singapore and the world with CRISTOFORI as the most trusted brand in piano, violin, guitar, other classical instruments, and music education.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2013</strong>, Cristofori was awarded the Singapore Prestige Brand Award (SPBA) &ndash; Heritage Brand Winner, in recognition of over 25 years in the market. The award recognises companies based on their brand heritage and identity, brand strategic blueprint &amp; brand development and performance. SPBA is jointly organised by the Association of Small and Medium Enterprise (ASME) and Lianhe Zhaobao</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2014</strong>, CRISTOFORI Music was honored the Singapore Heartland Enterprise Star Award, which was a testimonial of relentless effort to bring music to everyone. CRISTOFORI Music was awarded for being the most franchisable business in the prominent enterprise category for its scalable business model. Besides, CRISTOFORI Music is applauded for its well-thought-out business model and outstanding intellectual property with 16,000 student numbers.</p>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in\"><strong>In 2015</strong>, CRISTOFORI music is honoured with the award Influential Brands Top Brand Winner in music category. With the aim to popularize music into every household, CRISTOFORI Music School is now Singapore&rsquo;s largest music company with more than 30 music centres with the strength of 16,000 students. The company has gradually expanded the business and has strengthened the status of leading company in retailing of musical instruments and providing music education. CRISTOFORI Music is awarded 2015 Top Franchise Brand as well with a vision to transform Singapore into the Renaissance City of Asia through music.</p>",
          position: 0,
          parent: null,
          children: null
        }
      ]
    }
  ]

  getBookChapters() : BookChapter[] {
    return this.CHAPTERS;
  }

  constructor() { }
}
