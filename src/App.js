import React, { useState } from 'react';

// Custom SVG Icons Component to keep code clean and dependency-free
const Icons = {
  Belly: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4c4 2 4 14 0 16M20 4c-4 2-4 14 0 16"></path>
      <path d="M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  ),
  Spine: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22"></line>
      <circle cx="12" cy="5" r="2.5"></circle>
      <circle cx="12" cy="12" r="2.5"></circle>
      <circle cx="12" cy="19" r="2.5"></circle>
      <path d="M8 8c2 1 6 1 8 0M8 15c2 1 6 1 8 0"></path>
    </svg>
  ),
  Tape: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
      <line x1="7" y1="5" x2="7" y2="19"></line>
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="17" y1="5" x2="17" y2="19"></line>
      <path d="M3 12h18"></path>
    </svg>
  ),
  Scale: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="12" x2="12" y2="7"></line>
    </svg>
  ),
  Layers: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  DoubleCheck: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#53bdeb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 5L9.5 12.5L6 9" />
      <path d="M22 5L14.5 12.5L13 11" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="faq-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  ),
  Guarantee: () => (
    <svg viewBox="0 0 24 24" width="80" height="80" fill="none">
      <circle cx="12" cy="12" r="10" fill="rgba(197, 155, 39, 0.1)" stroke="#c59b27" strokeWidth="2" />
      <path d="M12 6l2.5 5 5.5.5-4 4 1 5.5-5-3-5 3 1-5.5-4-4 5.5-.5z" fill="#c59b27" />
    </svg>
  ),
  Hourglass: () => (
    <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 2h14M5 22h14M19 2l-7 7-7-7M5 22l7-7 7 7M12 9v6" />
      <path d="M8 5c1 1.5 2 2.5 4 2.5s3-1 4-2.5M8 19c1-1.5 2-2.5 4-2.5s3 1 4 2.5" fill="rgba(0,0,0,0.05)" />
    </svg>
  ),
  ArrowLeftRight: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 11 21 7 17 3"></polyline>
      <line x1="21" y1="7" x2="9" y2="7"></line>
      <polyline points="7 13 3 17 7 21"></polyline>
      <line x1="3" y1="17" x2="15" y2="17"></line>
    </svg>
  ),
  Menu: () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
};

// Interactive Before/After Image Slider
function BeforeAfterSlider({ imageSrc, height = "300px" }) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="slider-container" style={{ height, '--clip-pos': sliderPos + '%' }}>
      {/* Right Half ("بعد" - After) */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}>
        <img src={imageSrc} style={{
          width: '200%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          right: '-100%',
          top: 0,
          pointerEvents: 'none'
        }} alt="بعد" />
      </div>

      {/* Left Half ("قبل" - Before) */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: `${sliderPos}%`,
        height: '100%',
        overflow: 'hidden',
        borderLeft: '3px solid var(--primary-gold-light)',
        zIndex: 2,
      }}>
        <img src={imageSrc} style={{
          width: '200%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          right: 0,
          top: 0,
          pointerEvents: 'none'
        }} alt="قبل" />
      </div>

      {/* Transparent drag slider control */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          zIndex: 10,
          cursor: 'ew-resize',
          margin: 0
        }}
      />

      {/* Sliding handle bar & button */}
      <div className="slider-handle" style={{ left: `${100 - sliderPos}%` }}>
        <div className="slider-button">
          <Icons.ArrowLeftRight />
        </div>
      </div>

      <span className="slider-label label-before">قبل</span>
      <span className="slider-label label-after">بعد</span>
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [waistMeasurement, setWaistMeasurement] = useState('');
  const [calculatedSize, setCalculatedSize] = useState('');

  // Checkout Modal State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [selectedSize, setSelectedSize] = useState('M');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqData = [
    {
      q: "ما هي المدة اللازمة لرؤية نتائج واضحة؟",
      a: "تظهر النتائج الأولية في نحت الخصر خلال 14 يوماً من الاستخدام اليومي المنتظم والممنهج (بداية من ساعتين تدريجياً إلى 8 ساعات يومياً) مع شرب كميات كافية من الماء."
    },
    {
      q: "هل يمكنني ارتداء المشد أثناء النوم أو ممارسة التمارين الرياضية الشديدة؟",
      a: "يُفضل بشدة ارتداء المشد خلال فترات اليقظة والأنشطة الخفيفة والتمارين الرياضية لمساعدته في مضاعفة حرق الدهون ونحت الخصر. ولكن لا يُنصح بارتدائه أثناء النوم لتجنب إعاقة التنفس المريح والدورة الدموية."
    },
    {
      q: "كيف أختار مقاسي الصحيح؟",
      a: "يرجى قياس محيط خصرك بالسنتيمتر فوق سرة البطن مباشرة وبشكل مسترخٍ (دون شد البطن للداخل) ثم استخدام جدول المقاسات أدناه أو حاسبة المقاسات الذكية لتحديد مقاسك المثالي."
    },
    {
      q: "ما هي ميزة الضمان الذهبي وكيف أستفيد منها؟",
      a: "نحن واثقون تماماً من فعالية مشد شدام المطور. إذا التزمت بارتداء المشد وفق التعليمات المرفقة لمدة 30 يوماً ولم تلاحظ أي تغيير في مقاس الخصر أو القوام، يمكنك التواصل معنا لاسترداد كامل المبلغ المدفوع فوراً."
    }
  ];

  const handleCalculateSize = (val) => {
    const cm = parseFloat(val);
    setWaistMeasurement(val);

    if (isNaN(cm) || cm <= 0) {
      setCalculatedSize('');
      return;
    }

    if (cm >= 75.00 && cm < 81.50) {
      setCalculatedSize('XS');
    } else if (cm >= 81.50 && cm < 88.00) {
      setCalculatedSize('S');
    } else if (cm >= 88.00 && cm < 94.00) {
      setCalculatedSize('M');
    } else if (cm >= 94.00 && cm < 101.00) {
      setCalculatedSize('L');
    } else if (cm >= 101.00 && cm < 106.50) {
      setCalculatedSize('XL');
    } else if (cm >= 106.50 && cm <= 112.50) {
      setCalculatedSize('2XL');
    } else if (cm < 75.00) {
      setCalculatedSize('أصغر من مقاساتنا المتاحة (XS)');
    } else {
      setCalculatedSize('أكبر من مقاساتنا المتاحة (2XL)');
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !deliveryAddress) {
      alert("الرجاء ملء جميع الحقول المطلوبة لإكمال الطلب");
      return;
    }
    setOrderSubmitted(true);
    setTimeout(() => {
      // Clear form
      setFullName('');
      setPhoneNumber('');
      setDeliveryAddress('');
      setOrderSubmitted(false);
      setIsCheckoutOpen(false);
      alert("تم تسجيل طلبك بنجاح! سيتواصل معك فريق خدمة العملاء خلال 24 ساعة لتأكيد الشحن.");
    }, 2000);
  };

  // const openOrderModal = (size = 'M') => {
  //   setSelectedSize(size);
  //   setIsCheckoutOpen(true);
  // };

  return (
    <div className="landing-page">
      {/* Sticky Glassmorphism Header */}
      <header className="site-header">
        <div className="container header-container">
          <a href="#home" className="logo-area" onClick={() => setActiveTab('home')}>
            {/* <img src="/logo192.png" alt="شعار مشد شدام" className="logo-icon" onError={(e) => { e.target.src = "https://placehold.co/100x100/dfb74c/ffffff?text=%D8%B4%D8%AF%D8%A7%D9%85" }} /> */}
            <h1 className="logo-text">مشد <span>شدام</span> المطور</h1>
          </a>

          {/* Desktop Navigation */}
          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}>الرئيسية</a></li>
            <li><a href="#experiences" className={`nav-link ${activeTab === 'experiences' ? 'active' : ''}`} onClick={() => { setActiveTab('experiences'); setMobileMenuOpen(false); }}>تجارب العملاء</a></li>
            <li><a href="#why-us" className={`nav-link ${activeTab === 'why-us' ? 'active' : ''}`} onClick={() => { setActiveTab('why-us'); setMobileMenuOpen(false); }}>المميزات</a></li>
            <li><a href="#how-to-use" className={`nav-link ${activeTab === 'how-to-use' ? 'active' : ''}`} onClick={() => { setActiveTab('how-to-use'); setMobileMenuOpen(false); }}>طريقة الاستخدام</a></li>
            <li><a href="#sizes" className={`nav-link ${activeTab === 'sizes' ? 'active' : ''}`} onClick={() => { setActiveTab('sizes'); setMobileMenuOpen(false); }}>المقاسات</a></li>
            <li><a href="#faq" className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => { setActiveTab('faq'); setMobileMenuOpen(false); }}>الأسئلة الشائعة</a></li>
          </ul>

          <div className="header-cta">
            {/* <button className="gold-gradient-btn pulse" onClick={() => openOrderModal('M')}>
                <Icons.Cart />
                <span>اطلب الآن</span>
              </button> */}
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="القائمة">
              {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge badge-gold">مشد شدام المطور</span>
            <h2 className="hero-title">مشد شدام المطور</h2>
            <p className="hero-subtitle">
              الأعلى تقييماً والمثبتة نتائجه علمياً وعملياً على إزالة الكرش، نحت الخصر بشكل انسيابي، تحسين قوام الظهر، والمساعدة في إنقاص الوزن بأمان تام.
            </p>

            <div className="hero-features">
              <div className="hero-feature-item">
                <div className="hero-feature-icon"><Icons.Belly /></div>
                <span className="hero-feature-text">إزالة الكرش</span>
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon"><Icons.Spine /></div>
                <span className="hero-feature-text">تحسين القوام</span>
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon"><Icons.Tape /></div>
                <span className="hero-feature-text">نحت الخصر</span>
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon"><Icons.Scale /></div>
                <span className="hero-feature-text">إنقاص الوزن</span>
              </div>
            </div>

            {/* <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="gold-gradient-btn" onClick={() => openOrderModal('M')} style={{ padding: '16px 36px', fontSize: '1.15rem' }}>
                <Icons.Cart />
                <span>احصلي عليه الآن - الدفع عند الاستلام</span>
              </button>
            </div> */}
          </div>

          <div className="hero-image-container">
            <div className="hero-image-bg"></div>
            <img src="hizamPic.WEBP" alt="مشد شدام المطور" className="hero-product-img" onError={(e) => { e.target.src = "https://placehold.co/400x500/1a1a1a/dfb74c?text=%D9%85%D8%B4%D8%AF+%D8%B4%D8%AF%D8%A7%D9%85" }} />
          </div>
        </div>
      </section>

      {/* Customer Experiences / Before & After Slider Section */}
      <section id="experiences" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-gold">تجارب حقيقية</span>
            <h2 className="section-title">تجارب وصور عميلاتنا قبل وبعد</h2>
            <p className="section-subtitle">شاهد النتائج المذهلة والواقعية التي حققتها عميلاتنا عند استخدام مشد شدام المطور بانتظام.</p>
          </div>

          <div className="experiences-grid">
            {/* Card 1: Scale Experience */}
            <div className="experience-card">
              <div className="experience-card-header">
                <span className="badge badge-dark">تجربة حقيقية</span>
                <h3 className="experience-card-title">تجربة لعميلة أخرى على الميزان</h3>
                <p className="experience-card-subtitle">مع رياضة ودايت خفيف خلال 11 يوم فقط</p>
              </div>

              {/* Slider for Scale comparison */}
              <BeforeAfterSlider imageSrc="/beforeafterthree.png" height="300px" />

              <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '15px' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>اسحبي المؤشر لليمين واليسار لمشاهدة الفرق</p>
              </div>
            </div>

            {/* Card 2: Second Experience */}
            <div className="experience-card">
              <div className="experience-card-header">
                <span className="badge badge-dark">تجربة حقيقية</span>
                <h3 className="experience-card-title">تجربة ثانية لأحد عميلاتنا</h3>
                <p className="experience-card-subtitle">نحت فوري ومستمر لشكل الخصر والقوام</p>
              </div>

              {/* Slider for Waist comparison */}
              <BeforeAfterSlider imageSrc="/beforeafterone.JPG" height="300px" />

              <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '15px' }}>


                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>اسحبي المؤشر لليمين واليسار لمشاهدة الفرق</p>

              </div>
            </div>

            {/* Card 3: Waist comparison followed from beginning */}
            <div className="experience-card">
              <div className="experience-card-header">
                <span className="badge badge-dark">تجربة حقيقية</span>
                <h3 className="experience-card-title">تجربة عملية</h3>
                <p className="experience-card-subtitle">* تابعناها من البداية</p>
              </div>

              {/* Slider for Waist comparison */}
              <BeforeAfterSlider imageSrc="/beforeaftertwo.JPG" height="300px" />
              <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '15px' }}>


                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>اسحبي المؤشر لليمين واليسار لمشاهدة الفرق</p>

              </div>
              {/* <div className="mini-comparison-grid">
                <div className="mini-img-wrapper">
                  <div style={{ width: '100%', height: '70px', overflow: 'hidden', borderRadius: '8px' }}>
                    <img src="/before_after_waist.png" alt="قبل" className="mini-img" style={{ width: '200%', height: '100%', objectFit: 'cover', transform: 'translateX(0%)' }} />
                  </div>
                  <div className="mini-label">قبل</div>
                </div>
                <div className="mini-arrow">←</div>
                <div className="mini-img-wrapper">
                  <div style={{ width: '100%', height: '70px', overflow: 'hidden', borderRadius: '8px' }}>
                    <img src="/before_after_waist.png" alt="بعد" className="mini-img" style={{ width: '200%', height: '100%', objectFit: 'cover', transform: 'translateX(-50%)' }} />
                  </div>
                  <div className="mini-label">بعد</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Why Shaddam? Section */}
      <section id="why-us" className="section-padding section-bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-gold">ليش شدام؟</span>
            <h2 className="section-title">ليش تختارين مشد شدام المطور؟</h2>
            <p className="section-subtitle">المزيج المثالي بين الراحة القصوى والشد الفعال الذي يعطيك نتائج حقيقية تدوم طويلاً.</p>
          </div>

          <div className="why-shaddam-container">
            {/* Left Column (Points 1, 2, 3) */}
            <div className="why-column why-column-left">
              <div className="why-card">
                <div className="why-icon-num">1</div>
                <div className="why-card-content">
                  <h3>ثلاث مستويات شد</h3>
                  <p>تصميم مبتكر يتيح لك تعديل قوة الشد تدريجياً لشد وترتيب القوام بما يتناسب مع راحة جسمك اليومية.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon-num">2</div>
                <div className="why-card-content">
                  <h3>نحت الخصر</h3>
                  <p>يعمل على نحت جوانب الخصر والتخلص من البروز بشكل طبيعي لتحصلي على خصر انسيابي وجذاب من الاستخدام الأول.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon-num">3</div>
                <div className="why-card-content">
                  <h3>إنقاص الوزن</h3>
                  <p>بفضل خامات النيوبرين واللاتكس المطورة حرارياً، يضاعف حرق السعرات الحرارية أثناء الحركة والتمارين اليومية.</p>
                </div>
              </div>
            </div>

            {/* Center Product Image */}
            <div className="why-center-image">
              <img src="hizamPic.WEBP" alt="مشد شدام المطور" className="why-center-product" onError={(e) => { e.target.src = "https://placehold.co/400x500/1a1a1a/dfb74c?text=%D9%85%D8%B4%D8%AF+%D8%B4%D8%AF%D8%A7%D9%85" }} />
            </div>

            {/* Right Column (Points 4, 5) */}
            <div className="why-column why-column-right">
              <div className="why-card">
                <div className="why-icon-num">4</div>
                <div className="why-card-content">
                  <h3>إزالة الكرش بعد الولادة</h3>
                  <p>فعالية استثنائية لمساعدة عضلات البطن على الانقباض والعودة لحالتها الطبيعية والتخلص من ترهل الولادة بأمان.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon-num">5</div>
                <div className="why-card-content">
                  <h3>نتائج سريعة</h3>
                  <p>عند الالتزام بالتعليمات واللبس التدريجي اليومي، تبدأ النتائج الواقعية بالظهور وقياس خصرك بالتقلص خلال 14 يوماً فقط.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-gold">طريقة الاستخدام</span>
            <h2 className="section-title">كيف ترتدين مشد شدام لنتائج مثالية؟</h2>
            <p className="section-subtitle">خطوات بسيطة وفعالة تضمن لك أقصى استفادة ونحت آمن بدون التسبب في أي إجهاد للعضلات.</p>
          </div>

          <div className="steps-container">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-badge">1</div>
              <div className="step-icon-wrapper">
                <Icons.Belly />
              </div>
              <h3 className="step-title">اللبس المباشر</h3>
              <p className="step-desc">البسي المشد بشكل مباشر على الجلد الجاف. وفي حال تحسس البشرة الشديد، يفضل لبس قميص قطني خفيف تحت المشد لحمايتها.</p>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-badge">2</div>
              <div className="step-icon-wrapper">
                <Icons.Layers />
              </div>
              <h3 className="step-title">رفع السحاب والشد</h3>
              <p className="step-desc">ارفعي السحاب بالكامل للأعلى لضم البطن، ثم قومي بشد الأحزمة الإضافية ولفها حول الخصر لضمان انسيابية وشد متوازن ومتين.</p>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-badge">3</div>
              <div className="step-icon-wrapper">
                <Icons.Clock />
              </div>
              <h3 className="step-title">التدرج في الارتداء</h3>
              <p className="step-desc">تدرجي في أوقات لبس المشد يومياً: اليوم الأول ساعتان، اليوم الثاني ثلاث ساعات، اليوم الثالث 4 ساعات، ثم زيديها تدريجياً لتصلي إلى 8 ساعات يومياً كحد أقصى.</p>
              <div className="step-subtext">تنبيه: التدرج يمنح عضلات البطن فرصة للتكيف ويمنع أي آثار جانبية.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Testimonials Section */}
      <section className="section-padding section-bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-gold">تجارب وتقييمات</span>
            <h2 className="section-title">رأي البنات وتجاربهم لمشد شدام المطور</h2>
            <p className="section-subtitle">لقطات حقيقية من محادثات عميلاتنا يشاركن فيها تجاربهن وسعادتهن بالنتائج التي حصلن عليها.</p>
          </div>

          <div className="whatsapp-grid">
            {/* Chat 1 */}
            <div className="chat-card">
              <div className="chat-header">
                <div className="chat-avatar">ر</div>
                <div className="chat-user-info">
                  <div className="chat-user-name">رغد أحمد</div>
                  <div className="chat-status">متصل الآن</div>
                </div>
              </div>
              <div className="chat-body">
                <div className="bubble bubble-received">
                  المشد مره عجبني أكثر شي كنت ألبسه وقت التمارين لأنه يثبت وماكان يضايقني وأنا أتحرك. بصراحة يستحق كل ريال!
                  <span className="bubble-time">02:50 م</span>
                </div>
              </div>
            </div>

            {/* Chat 2 */}
            <div className="chat-card">
              <div className="chat-header">
                <div className="chat-avatar">س</div>
                <div className="chat-user-info">
                  <div className="chat-user-name">سارة العنزي</div>
                  <div className="chat-status">نشط منذ 5 دقائق</div>
                </div>
              </div>
              <div className="chat-body">
                <div className="bubble bubble-received">
                  صار لي شهر وشوي استخدمه والله الفرق مب طبيعي الكل يتوقع أخذت إبر أوزمبيك أو مسويه عملية نحت بجسمي 😭😭
                  <span className="bubble-time">04:58 م</span>
                </div>
              </div>
            </div>

            {/* Chat 3 */}
            <div className="chat-card">
              <div className="chat-header">
                <div className="chat-avatar">ش</div>
                <div className="chat-user-info">
                  <div className="chat-user-name">شهد الشهري</div>
                  <div className="chat-status">متصل الآن</div>
                </div>
              </div>
              <div className="chat-body">
                <div className="bubble bubble-received">
                  كنت استخدم مشد حراري من سنين واقول مافي احسن منه، ثم بالصدفة شفت مشدكم وجربته الفرق جداً السما والأرض، شكراً احسن من كل حاجه
                  <span className="bubble-time">11:03 م</span>
                </div>
              </div>
            </div>

            {/* Chat 4 */}
            <div className="chat-card">
              <div className="chat-header">
                <div className="chat-avatar">خ</div>
                <div className="chat-user-info">
                  <div className="chat-user-name">خلود المطيري</div>
                  <div className="chat-status">نشط منذ ساعة</div>
                </div>
              </div>
              <div className="chat-body">
                <div className="bubble bubble-received">
                  البداية كانت صعبة شوي بس تحملت لاني كنت ابي اتعود عليه والحين خصر يجنن وقوامي صار مستقيم جداً.
                  <span className="bubble-time">05:38 م</span>
                </div>
              </div>
            </div>

            {/* Chat 5 */}
            <div className="chat-card">
              <div className="chat-header">
                <div className="chat-avatar">أم</div>
                <div className="chat-user-info">
                  <div className="chat-user-name">أم خالد</div>
                  <div className="chat-status">متصل الآن</div>
                </div>
              </div>
              <div className="chat-body">
                <div className="bubble bubble-received">
                  المشد للأمانه وشهادة حق أقولها منتج جودتها عالية الكوالتي والخامة ممتازة جداً والخياطة حقته مره متينه ماشاء الله وتتحمل الشد يستاهل كل ريال، مو خسارة فيه أبداً.
                  <span className="bubble-time">05:33 م</span>
                </div>
              </div>
            </div>

            {/* Chat 6 (CS response style) */}
            <div className="chat-card">
              <div className="chat-header">
                <div className="chat-avatar">ش</div>
                <div className="chat-user-info">
                  <div className="chat-user-name">خدمة العملاء - شدام</div>
                  <div className="chat-status">متصل الآن</div>
                </div>
              </div>
              <div className="chat-body">
                <div className="bubble bubble-sent">
                  ياهلا، حابين نعرف رأيك عن المشد وكيفك معه والسلبيات والايجابيات الي واجهتك... واذا عندك اي اسئله موجودين بخدمتكم 🌸
                  <span className="bubble-time">
                    05:29 م <Icons.DoubleCheck />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee and Note Area */}
          <div className="promotions-container">
            {/* Guarantee Card */}
            <div className="promo-card promo-card-gold">
              <div className="promo-icon-large">
                <Icons.Guarantee />
              </div>
              <div className="promo-content">
                <h3>ضماننا الذهبي المميز</h3>
                <p>لأننا نثق في كفاءة ونتائج مشد شدام، نقول لك بكل ثقة: إن لم تشاهدي نتيجة مرضية وقابلة للقياس خلال 30 يوماً من ارتدائه بالخطوات المذكورة، نرجع لك فلوسك كاملة فوراً!</p>
              </div>
            </div>

            {/* Limit Note Card */}
            <div className="promo-card promo-card-dark">
              <div className="promo-icon-large">
                <Icons.Hourglass />
              </div>
              <div className="promo-content">
                <h3>ملاحظة هامة جداً</h3>
                <p>نظراً للدقة العالية والمتقنة في حياكة وتصنيع مشد شدام المطور، يستغرق إنتاج وتدقيق القطعة الواحدة 3 أيام كاملة. لذا، فإن الكميات المتاحة حالياً محدودة جداً ونفادها سريع.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes & Interactive Size Calculator Section */}
      <section id="sizes" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-gold">جدول المقاسات</span>
            <h2 className="section-title">كيف تحددين مقاسك المناسب؟</h2>
            <p className="section-subtitle">اختيار المقاس الدقيق يضمن لك شداً فعالاً ومريحاً. استخدمي حاسبتنا الذكية أو تفحصي جدول القياسات بالسنتيمتر.</p>
          </div>

          <div className="size-section-grid">
            {/* Left Column: Tips and interactive calculator */}
            <div className="size-tips">
              <div className="size-tip-item">
                <div className="size-tip-icon"><Icons.Check /></div>
                <div className="size-tip-text">جميع المقاسات والقياسات موضحة بالسنتيمتر (CM).</div>
              </div>
              <div className="size-tip-item">
                <div className="size-tip-icon"><Icons.Check /></div>
                <div className="size-tip-text">إذا كان قياس خصرك الفعلي يقع بين مقاسين، ننصح دائماً باختيار المقاس الأكبر لضمان الراحة.</div>
              </div>
              <div className="size-tip-item">
                <div className="size-tip-icon"><Icons.Check /></div>
                <div className="size-tip-text">للحصول على قياس خصر دقيق تماماً، لا تقومي بشد أو كتم بطنك للداخل أثناء أخذ القياس بمتر القياس.</div>
              </div>

              {/* Dynamic Size Calculator widget */}
              <div className="size-calculator">
                <h3 className="size-calc-title">
                  <Icons.Tape />
                  <span>احسبي مقاسك الذكي فوراً:</span>
                </h3>
                <div className="size-calc-inputs">
                  <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>محيط الخصر الخاص بك:</span>
                  <input
                    type="number"
                    placeholder="مثال: 85"
                    className="size-input"
                    value={waistMeasurement}
                    onChange={(e) => handleCalculateSize(e.target.value)}
                  />
                  <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>سنتيمتر (cm)</span>
                </div>
                {calculatedSize && (
                  <div className="size-calc-result">
                    المقاس الموصى به لك هو: <span>{calculatedSize}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Size Table */}
            <div className="size-table-container">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>المقاس</th>
                    <th>مقاس الخصر فوق السرة مباشرة (بالسنتيمتر)</th>
                    {/* <th>إجراء</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr className={calculatedSize === 'XS' ? 'highlighted' : ''}>
                    <td>XS</td>
                    <td>75.00 - 81.50 سم</td>
                    {/* <td><button className="gold-gradient-btn" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={() => openOrderModal('XS')}>طلب</button></td> */}
                  </tr>
                  <tr className={calculatedSize === 'S' ? 'highlighted' : ''}>
                    <td>S</td>
                    <td>81.50 - 88.00 سم</td>
                    {/* <td><button className="gold-gradient-btn" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={() => openOrderModal('S')}>طلب</button></td> */}
                  </tr>
                  <tr className={calculatedSize === 'M' ? 'highlighted' : ''}>
                    <td>M</td>
                    <td>88.00 - 94.00 سم</td>
                    {/* <td><button className="gold-gradient-btn" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={() => openOrderModal('M')}>طلب</button></td> */}
                  </tr>
                  <tr className={calculatedSize === 'L' ? 'highlighted' : ''}>
                    <td>L</td>
                    <td>94.00 - 101.00 سم</td>
                    {/* <td><button className="gold-gradient-btn" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={() => openOrderModal('L')}>طلب</button></td> */}
                  </tr>
                  <tr className={calculatedSize === 'XL' ? 'highlighted' : ''}>
                    <td>XL</td>
                    <td>101.00 - 106.50 سم</td>
                    {/* <td><button className="gold-gradient-btn" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={() => openOrderModal('XL')}>طلب</button></td> */}
                  </tr>
                  <tr className={calculatedSize === '2XL' ? 'highlighted' : ''}>
                    <td>2XL</td>
                    <td>106.50 - 112.50 سم</td>
                    {/* <td><button className="gold-gradient-btn" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={() => openOrderModal('2XL')}>طلب</button></td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="section-padding section-bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-gold">الأسئلة الشائعة</span>
            <h2 className="section-title">الأسئلة الشائعة حول مشد شدام</h2>
            <p className="section-subtitle">إليكِ إجابات كافية ومفصلة عن أكثر الأسئلة التي تدور في ذهنكِ حول استخدام المشد وضمان نتائجه.</p>
          </div>

          <div className="faq-grid">
            {faqData.map((item, index) => (
              <div key={index} className={`faq-item ${openFaqIndex === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
                  <span>{item.q}</span>
                  <Icons.ChevronDown />
                </div>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Bar */}
      {/* <section className="cta-bar">
        <div className="container cta-content">
          <h2 className="cta-title">ابدئي رحلة نحت خصرك وقوامك المثالي اليوم!</h2>
          <p className="cta-desc">مشد شدام المطور متوفر الآن بخصم مميز لفترة محدودة جداً مع شحن سريع مجاني والدفع الآمن عند الاستلام.</p>
          <button className="gold-gradient-btn pulse" onClick={() => openOrderModal('M')} style={{ padding: '16px 40px', fontSize: '1.2rem' }}>
            <Icons.Cart />
            <span>اطلبي الآن - كمية محدودة جداً</span>
          </button>
        </div>
      </section> */}

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-logo">
            {/* <img src="/logo192.png" alt="شدام" className="logo-icon" style={{ height: '35px' }} onError={(e) => { e.target.src = "https://placehold.co/100x100/dfb74c/ffffff?text=%D8%B4%D8%AF%D8%A7%D9%85" }} /> */}
            <span className="footer-logo-text">مشد شدام المطور</span>
          </div>
          <div className="footer-links">
            <a href="#home" className="footer-link">الرئيسية</a>
            <a href="#experiences" className="footer-link">تجارب العملاء</a>
            <a href="#why-us" className="footer-link">المميزات</a>
            <a href="#how-to-use" className="footer-link">طريقة الاستخدام</a>
            <a href="#sizes" className="footer-link">المقاسات</a>
            <a href="#faq" className="footer-link">الأسئلة الشائعة</a>
          </div>
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لمتجر مشد شدام المطور الرسمي.</p>
        </div>
      </footer>

      {/* Order / Checkout Modal Overlay */}
      {isCheckoutOpen && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal">
            <div className="checkout-header">
              <h3>تسجيل طلب جديد (الدفع عند الاستلام)</h3>
              <button className="close-btn" onClick={() => setIsCheckoutOpen(false)}>&times;</button>
            </div>
            <div className="checkout-body">
              <form onSubmit={handleSubmitOrder}>
                <div className="form-group">
                  <label className="form-label">الاسم الكامل *</label>
                  <input
                    type="text"
                    placeholder="اكتبي اسمك الثلاثي"
                    className="form-input"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">رقم الجوال لتأكيد الشحن *</label>
                  <input
                    type="tel"
                    placeholder="مثال: 05XXXXXXXX"
                    className="form-input"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">عنوان التوصيل بالتفصيل *</label>
                  <input
                    type="text"
                    placeholder="المدينة، اسم الحي، الشارع"
                    className="form-input"
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">المقاس المحدد</label>
                  <select
                    className="form-input"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="XS">XS (60-70 سم)</option>
                    <option value="S">S (70-80 سم)</option>
                    <option value="M">M (80-90 سم)</option>
                    <option value="L">L (90-100 سم)</option>
                    <option value="XL">XL (100-110 سم)</option>
                    <option value="2XL">2XL (110-120 سم)</option>
                  </select>
                </div>

                <div style={{ background: '#fcfcfc', border: '1px solid #eee', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.85rem' }}>
                  <p style={{ display: 'flex', justifyContent: 'space-between', margin: '4px 0' }}>
                    <span>سعر المنتج:</span>
                    <strong>299 ريال سعودي</strong>
                  </p>
                  <p style={{ display: 'flex', justifyContent: 'space-between', margin: '4px 0', color: '#4caf50' }}>
                    <span>تكلفة التوصيل:</span>
                    <strong>مجاني (لفترة محدودة)</strong>
                  </p>
                  <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '8px 0' }} />
                  <p style={{ display: 'flex', justifyContent: 'space-between', margin: '4px 0', fontWeight: 'bold', fontSize: '0.95rem' }}>
                    <span>المجموع الإجمالي:</span>
                    <span style={{ color: 'var(--primary-gold-dark)' }}>299 ريال سعودي</span>
                  </p>
                </div>

                <button type="submit" className="gold-gradient-btn checkout-submit" disabled={orderSubmitted}>
                  {orderSubmitted ? "جاري تسجيل طلبك..." : "تأكيد وإرسال الطلب"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
