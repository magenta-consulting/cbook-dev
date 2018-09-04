<?php

namespace Magenta\Bundle\CBookAdminBundle\Controller;


use Magenta\Bundle\CBookModelBundle\Entity\Organisation\OrgBook;
use Magenta\Bundle\CBookModelBundle\Entity\Organisation\OrgChapter;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class BookReaderController extends Controller
{

    public function indexAction($accessCode, $employeeCode) {
        $b1 = new OrgBook();
        $b1->setName('Symfony Encore');
        $b2 = new OrgBook();
        $b2->setName('React JS');
        $books = [$b1,$b2];
        return $this->render('@MagentaCBookAdmin/Book/index.html.twig', [
            'books' => $books,
            'accessCode' => $accessCode,
            'employeeCode' => $employeeCode
        ]);
    }

    public function readerAction($accessCode, $employeeCode) {
        $book = new OrgBook();
        $book->setName('React JS');
        $c1 = new OrgChapter();
        $c1->setName('Basic');
        $c1->setText('<b id="React"><a href="#React" class="headerlink" title="React"></a>React</b><p>React and Vue share many similarities. They both:</p>
                            <ul>
                            <li>utilize a virtual DOM</li>
                            <li>provide reactive and composable view components</li>
                            <li>maintain focus in the core library, with concerns such as routing and global state management handled by companion libraries</li>
                            </ul>
                            <p>Being so similar in scope, we’ve put more time into fine-tuning this comparison than any other. We want to ensure not only technical accuracy, but also balance. We point out where React outshines Vue, for example in the richness of their ecosystem and abundance of their custom renderers.</p>
                            <p>With that said, it’s inevitable that the comparison would appear biased towards Vue to some React users, as many of the subjects explored are to some extent subjective. We acknowledge the existence of varying technical taste, and this comparison primarily aims to outline the reasons why Vue could potentially be a better fit if your preferences happen to coincide with ours.</p>
                            <p>Some of the sections below may also be slightly outdated due to recent updates in React 16+, and we are planning to work with the React community to revamp this section in the near future.</p>
                            <b id="Runtime-Performance"><a href="#Runtime-Performance" class="headerlink" title="Runtime Performance"></a>Runtime Performance</b><p>Both React and Vue are exceptionally and similarly fast, so speed is unlikely to be a deciding factor in choosing between them. For specific metrics though, check out this <a href="http://www.stefankrause.net/js-frameworks-benchmark7/table.html" target="_blank" rel="noopener">3rd party benchmark</a>, which focuses on raw render/update performance with very simple component trees.</p>
                            <b id="Optimization-Efforts"><a href="#Optimization-Efforts" class="headerlink" title="Optimization Efforts"></a>Optimization Efforts</b><p>In React, when a component’s state changes, it triggers the re-render of the entire component sub-tree, starting at that component as root. To avoid unnecessary re-renders of child components, you need to either use <code>PureComponent</code> or implement <code>shouldComponentUpdate</code> whenever you can. You may also need to use immutable data structures to make your state changes more optimization-friendly. However, in certain cases you may not be able to rely on such optimizations because <code>PureComponent/shouldComponentUpdate</code> assumes the entire sub tree’s render output is determined by the props of the current component. If that is not the case, then such optimizations may lead to inconsistent DOM state.</p>
                            <p>In Vue, a component’s dependencies are automatically tracked during its render, so the system knows precisely which components actually need to re-render when state changes. Each component can be considered to have <code>shouldComponentUpdate</code> automatically implemented for you, without the nested component caveats.</p>
                            <p>Overall this removes the need for a whole class of performance optimizations from the developer’s plate, and allows them to focus more on building the app itself as it scales.</p>
                            <b id="HTML-amp-CSS"><a href="#HTML-amp-CSS" class="headerlink" title="HTML &amp; CSS"></a>HTML &amp; CSS</b><p>In React, everything is just JavaScript. Not only are HTML structures expressed via JSX, the recent trends also tend to put CSS management inside JavaScript as well. This approach has its own benefits, but also comes with various trade-offs that may not seem worthwhile for every developer.</p>
                            <p>Vue embraces classic web technologies and builds on top of them. To show you what that means, we’ll dive into some examples.</p>
                            <b id="JSX-vs-Templates"><a href="#JSX-vs-Templates" class="headerlink" title="JSX vs Templates"></a>JSX vs Templates</b><p>In React, all components express their UI within render functions using JSX, a declarative XML-like syntax that works within JavaScript.</p>
                            <p>Render functions with JSX have a few advantages:</p>
                            <ul>
                            <li><p>You can leverage the power of a full programming language (JavaScript) to build your view. This includes temporary variables, flow controls, and directly referencing JavaScript values in scope.</p>
                            </li>
                            <li><p>The tooling support (e.g. linting, type checking, editor autocompletion) for JSX is in some ways more advanced than what’s currently available for Vue templates.</p>
                            </li>
                            </ul>
                            <p>In Vue, we also have <a href="render-function.html">render functions</a> and even <a href="render-function.html#JSX">support JSX</a>, because sometimes you do need that power. However, as the default experience we offer templates as a simpler alternative. Any valid HTML is also a valid Vue template, and this leads to a few advantages of its own:</p>
                            <ul>
                            <li><p>For many developers who have been working with HTML, templates feel more natural to read and write. The preference itself can be somewhat subjective, but if it makes the developer more productive then the benefit is objective.</p>
                            </li>
                            <li><p>HTML-based templates make it much easier to progressively migrate existing applications to take advantage of Vue’s reactivity features.</p>
                            </li>
                            <li><p>It also makes it much easier for designers and less experienced developers to parse and contribute to the codebase.</p>
                            </li>
                            <li><p>You can even use pre-processors such as Pug (formerly known as Jade) to author your Vue templates.</p>
                            </li>
                            </ul>');
        $c2 = new OrgChapter();
        $c2->setName('Component-Scoped CSS');
        $c2->setText('<b>Component-Scoped CSS</b><p>Unless you spread components out over multiple files (for example with <a href="https://github.com/gajus/react-css-modules" target="_blank" rel="noopener">CSS Modules</a>), scoping CSS in React is often done via CSS-in-JS solutions (e.g. <a href="https://github.com/styled-components/styled-components" target="_blank" rel="noopener">styled-components</a>, <a href="https://github.com/paypal/glamorous" target="_blank" rel="noopener">glamorous</a>, and <a href="https://github.com/emotion-js/emotion" target="_blank" rel="noopener">emotion</a>). This introduces a new component-oriented styling paradigm that is different from the normal CSS authoring process. Additionally, although there is support for extracting CSS into a single stylesheet at build time, it is still common that a runtime will need to be included in the bundle for styling to work properly. While you gain access to the dynamism of JavaScript while constructing your styles, the tradeoff is often increased bundle size and runtime cost.</p>
                            <p>If you are a fan of CSS-in-JS, many of the popular CSS-in-JS libraries support Vue (e.g. <a href="https://github.com/styled-components/vue-styled-components" target="_blank" rel="noopener">styled-components-vue</a> and <a href="https://github.com/egoist/vue-emotion" target="_blank" rel="noopener">vue-emotion</a>). The main difference between React and Vue here is that the default method of styling in Vue is through more familiar <code>style</code> tags in <a href="single-file-components.html">single-file components</a>.</p>
                            <p><a href="single-file-components.html">Single-file components</a> give you full access to CSS in the same file as the rest of your component code.</p>
                            <figure class="highlight html"><table><tr><td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">style</span> <span class="attr">scoped</span>&gt;</span><span class="undefined"></span></span><br><span class="line"><span class="css">  @<span class="keyword">media</span> (min-width: <span class="number">250px</span>) &#123;</span></span><br><span class="line"><span class="css">    <span class="selector-class">.list-container</span><span class="selector-pseudo">:hover</span> &#123;</span></span><br><span class="line"><span class="undefined">      background: orange;</span></span><br><span class="line"><span class="undefined">    &#125;</span></span><br><span class="line"><span class="undefined">  &#125;</span></span><br><span class="line"><span class="undefined"></span><span class="tag">&lt;/<span class="name">style</span>&gt;</span></span><br></pre></td></tr></table></figure>
                            <p>The optional <code>scoped</code> attribute automatically scopes this CSS to your component by adding a unique attribute (such as <code>data-v-21e5b78</code>) to elements and compiling <code>.list-container:hover</code> to something like <code>.list-container[data-v-21e5b78]:hover</code>.</p>
                            <p>Lastly, the styling in Vue’s single-file component’s is very flexible. Through <a href="https://github.com/vuejs/vue-loader" target="_blank" rel="noopener">vue-loader</a>, you can use any preprocessor, post-processor, and even deep integration with <a href="https://vue-loader.vuejs.org/en/features/css-modules.html" target="_blank" rel="noopener">CSS Modules</a> – all within the <code>&lt;style&gt;</code> element.</p>
                            <b id="Scale"><a href="#Scale" class="headerlink" title="Scale"></a>Scale</b><b id="Scaling-Up"><a href="#Scaling-Up" class="headerlink" title="Scaling Up"></a>Scaling Up</b><p>For large applications, both Vue and React offer robust routing solutions. The React community has also been very innovative in terms of state management solutions (e.g. Flux/Redux). These state management patterns and <a href="https://yarnpkg.com/en/packages?q=redux%20vue&amp;p=1" target="_blank" rel="noopener">even Redux itself</a> can be easily integrated into Vue applications. In fact, Vue has even taken this model a step further with <a href="https://github.com/vuejs/vuex" target="_blank" rel="noopener">Vuex</a>, an Elm-inspired state management solution that integrates deeply into Vue that we think offers a superior development experience.</p>
                            <p>Another important difference between these offerings is that Vue’s companion libraries for state management and routing (among <a href="https://github.com/vuejs" target="_blank" rel="noopener">other concerns</a>) are all officially supported and kept up-to-date with the core library. React instead chooses to leave these concerns to the community, creating a more fragmented ecosystem. Being more popular though, React’s ecosystem is considerably richer than Vue’s.</p>
                            <p>Finally, Vue offers a <a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener">CLI project generator</a> that makes it trivially easy to start a new project using your choice of build system, including <a href="https://github.com/vuejs-templates/webpack" target="_blank" rel="noopener">webpack</a>, <a href="https://github.com/vuejs-templates/browserify" target="_blank" rel="noopener">Browserify</a>, or even <a href="https://github.com/vuejs-templates/simple" target="_blank" rel="noopener">no build system</a>. React is also making strides in this area with <a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener">create-react-app</a>, but it currently has a few limitations:</p>
                            <ul>
                            <li>It does not allow any configuration during project generation, while Vue’s project templates allow <a href="http://yeoman.io/" target="_blank" rel="noopener">Yeoman</a>-like customization.</li>
                            <li>It only offers a single template that assumes you’re building a single-page application, while Vue offers a wide variety of templates for various purposes and build systems.</li>
                            <li>It cannot generate projects from user-built templates, which can be especially useful for enterprise environments with pre-established conventions.</li>
                            </ul>
                            <p>That said, it would probably make a better comparison between Vue core and Ember’s <a href="https://guides.emberjs.com/v2.10.0/templates/handlebars-basics/" target="_blank" rel="noopener">templating</a> and <a href="https://guides.emberjs.com/v2.10.0/object-model/" target="_blank" rel="noopener">object model</a> layers:</p>
                            <ul>
                            <li><p>Vue provides unobtrusive reactivity on plain JavaScript objects and fully automatic computed properties. In Ember, you need to wrap everything in Ember Objects and manually declare dependencies for computed properties.</p>
                            </li>
                            <li><p>Vue’s template syntax harnesses the full power of JavaScript expressions, while Handlebars’ expression and helper syntax is intentionally quite limited in comparison.</p>');
        $chapters = [$c1, $c2];
        $book->setChapters($chapters);
        return $this->render('@MagentaCBookAdmin/Book/reader.html.twig', [
            'book' => $book,
            'accessCode' => $accessCode,
            'employeeCode' => $employeeCode
        ]);
    }
}