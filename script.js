document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const langToggleBtn = document.getElementById('lang-toggle');
    const logo = document.getElementById('logo-link');
    let currentLang = 'th';

    const translations = {
        'th': {
            appTitle: 'C2RIB PANUS',
            navVision: 'วิสัยทัศน์',
            navPlatform: 'แพลตฟอร์ม',
            navMarket: 'ส่วนแบ่งการตลาด',
            navTimeline: 'ไทม์ไลน์',
            navContact: 'ติดต่อเรา',
            heroTitle: 'Center for Commercial Research and Innovation Business (C2RIB)',
            heroSubtitle: 'หนึ่งแพลตฟอร์มสำหรับทุกความต้องการด้านการเดินทาง',
            visionTitle: 'ข้อความจากผู้บริหารและวิสัยทัศน์องค์กร',
            visionSubtitle: 'รากฐานและทิศทางของ PANUS สู่การเป็นผู้นำนวัตกรรมยานยนต์แห่งอนาคต',
            ceoName: 'คุณพนัส วัฒนชัย',
            ceoPosition: 'ประธานเจ้าหน้าที่บริหาร (CEO)',
            ceoMessage: 'ด้วยประสบการณ์กว่า 50 ปี เราคือผู้นำด้านรถพ่วงและรถบรรทุกไฟฟ้าอันดับหนึ่งของประเทศไทย วิสัยทัศน์ของเราคือการเป็นผู้นำระดับโลกในธุรกิจยานยนต์ยุคใหม่ ที่ส่งมอบนวัตกรรมที่เหนือกว่าเพื่อลูกค้า สังคม และพนักงานอย่างยั่งยืน เรามุ่งมั่นสร้างผลตอบแทนเชิงบวกผ่านแพลตฟอร์มการเดินทาง ดิจิทัล และโซลูชันที่ยั่งยืน โดยยึดมั่นในค่านิยมหลักด้านความเป็นมืออาชีพ ความรับผิดชอบ นวัตกรรม ความสามัคคี และการแสวงหาความเป็นเลิศ',
            visionCardTitle: 'วิสัยทัศน์ (VISION)',
            visionCardText: 'เพื่อก้าวเป็นผู้นำที่ได้รับการยอมรับในระดับโลกในการดำเนินธุรกิจยานยนต์ยุคใหม่ ซึ่งมอบนวัตกรรมที่ดีกว่าให้กับลูกค้า สังคม และพนักงานอย่างยั่งยืน',
            missionCardTitle: 'พันธกิจ (MISSION)',
            missionCardText: 'สร้างผลตอบแทนเชิงบวกจากแพลตฟอร์มการเดินทาง ดิจิทัล และโซลูชันที่ยั่งยืน โดยใช้นวัตกรรมเพื่อตอบสนองความต้องการทางธุรกิจ',
            platformTitle: 'ONE PLATFORM',
            platformSubtitle: 'สำรวจ 3 เสาหลักแห่งนวัตกรรมที่ขับเคลื่อนอนาคตของ PANUS',
            tabMobility: 'Mobility',
            tabDigital: 'Digital Platform',
            tabSustainability: 'Sustainability',
            mobilitySectionTitle: 'Mobility: นวัตกรรมยานยนต์เพื่ออนาคต',
            mobilitySectionSubtitle: 'คลิกเพื่อดูรายละเอียดผลิตภัณฑ์และเทคโนโลยีการเดินทางแห่งอนาคตของเรา',
            evTitle: 'Electric Trucks',
            evText: 'รถบรรทุกไฟฟ้าหลากหลายรุ่นเพื่อการขนส่งที่ยั่งยืน',
            aavTitle: 'Amphibious Armored Vehicle',
            aavText: 'PANUS มุ่งมั่นที่จะพัฒนาการสร้างยานยนต์สะเทินน้ำสะเทินบกแบบมีเกราะหุ้ม (AAV) สำหรับปฏิบัติการทางบกและในทะเล',
            uavTitle: 'Autonomous UAV',
            uavText: 'โดรนอัตโนมัติอเนกประสงค์ พร้อมวิจัยและพัฒนาต่อยอด',
            autonomousTitle: 'Autonomous Driving',
            autonomousText: 'ระบบขับขี่อัตโนมัติในเส้นทางที่กำหนดตามกฎหมาย',
            selectTopic: 'เลือกหัวข้อเพื่อดูรายละเอียด',
            digitalSectionTitle: 'Digital Platform',
            digitalSectionText: 'เรากำลังพัฒนาแพลตฟอร์มดิจิทัลที่ล้ำสมัยเพื่อเชื่อมโยงทุกบริการด้านการเดินทาง เพิ่มประสิทธิภาพ และสร้างประสบการณ์ที่ไร้รอยต่อให้กับลูกค้าของเรา',
            sustainabilitySectionTitle: 'Sustainability',
            sustainabilitySectionText: 'ความยั่งยืนคือหัวใจในการดำเนินธุรกิจของเรา ตั้งแต่การพัฒนายานยนต์ไฟฟ้าไปจนถึงกระบวนการผลิตที่เป็นมิตรต่อสิ่งแวดล้อม เพื่อสร้างอนาคตที่ดีกว่าสำหรับทุกคน',
            marketTitle: 'ผู้นำตลาดในประเทศไทย',
            marketSubtitle: 'ด้วยความเป็นเลิศด้านนวัตกรรมและคุณภาพ เราจึงครองส่วนแบ่งการตลาดเป็นอันดับหนึ่ง',
            marketChartTitle: 'ส่วนแบ่งการตลาดรถพ่วงและรถบรรทุกในประเทศไทย (โดยประมาณ)',
            marketChartLabel: 'ส่วนแบ่งการตลาด (%)',
            marketChartLabels: ['PANUS', 'คู่แข่ง A', 'คู่แข่ง B', 'อื่นๆ'],
            timelineTitle: 'ไทม์ไลน์สู่อนาคต',
            timelineSubtitle: 'แผนการพัฒนานวัตกรรมและเทคโนโลยีของเราในอีกไม่กี่ปีข้างหน้า',
            timeline2025Year: '2025',
            timeline2025Text: 'เปิดตัวและส่งมอบนวัตกรรมยานยนต์ไฟฟ้ารุ่นใหม่สู่ตลาด',
            timeline2026Year: '2026',
            timeline2026Text: 'เริ่มทดสอบเทคโนโลยีการขับขี่อัตโนมัติ (ADAS) ในพื้นที่ควบคุม',
            timeline2027Year: '2027',
            timeline2027Text: 'ขยายแพลตฟอร์มดิจิทัลและโซลูชันเพื่อความยั่งยืนอย่างเต็มรูปแบบ',
            timeline2028Year: '2028',
            timeline2028Text: 'ก้าวสู่การเป็นผู้นำระดับภูมิภาคด้านนวัตกรรมยานยนต์เชิงพาณิชย์',
            contactTitle: 'ติดต่อเรา',
            contactSubtitle: 'สนใจนวัตกรรมของเรา หรือต้องการข้อมูลเพิ่มเติม? ติดต่อเราได้เลย',
            companyName: 'บริษัท พนัส แอสเซมบลีย์ จำกัด',
            companyAddress1: '27/1 หมู่3',
            companyAddress2: 'ตำบลกุฎโง้ง อำเภอพนัสนิคม ชลบุรี 20140',
            companyPhone: '<strong>โทรศัพท์:</strong> +66 38 462 102',
            companyEmail: '<strong>อีเมล:</strong> wimol@panus.co.th',
            websiteButton: 'เยี่ยมชมเว็บไซต์',
            footerText: '&copy; 2025 PANUS Assembly Co., Ltd. All Rights Reserved.'
        },
        'en': {
            appTitle: 'C2RIB PANUS',
            navVision: 'Vision',
            navPlatform: 'Platform',
            navMarket: 'Market Share',
            navTimeline: 'Timeline',
            navContact: 'Contact Us',
            heroTitle: 'Center for Commercial Research and Innovation Business (C2RIB)',
            heroSubtitle: 'One platform for all mobility needs',
            visionTitle: 'CEO Message & Company Vision',
            visionSubtitle: 'The foundation and direction of PANUS towards becoming a leader in future automotive innovation',
            ceoName: 'Panus Watanachai',
            ceoPosition: 'Chief Executive Officer (CEO)',
            ceoMessage: 'With over 50 years of experience, we are the number one leader in trailers and electric trucks in Thailand. Our vision is to be a globally recognized leader in the next-generation automotive business, delivering superior innovation to customers, society, and employees sustainably. We are committed to generating positive returns through mobility, digital, and sustainable solutions, adhering to core values of professionalism, accountability, innovation, unity, and the pursuit of excellence.',
            visionCardTitle: 'VISION',
            visionCardText: 'To become a globally recognized leader in operating a Next-Generation Automotive business, providing better innovation to customers, society, and employees sustainably.',
            missionCardTitle: 'MISSION',
            missionCardText: 'Generating positive returns from mobility, digital platforms and sustainable solutions using innovation to serve business needs.',
            platformTitle: 'ONE PLATFORM',
            platformSubtitle: 'Explore the 3 pillars of innovation driving the future of PANUS',
            tabMobility: 'Mobility',
            tabDigital: 'Digital Platform',
            tabSustainability: 'Sustainability',
            mobilitySectionTitle: 'Mobility: Automotive Innovation for the Future',
            mobilitySectionSubtitle: 'Click to view details of our products and future mobility technologies.',
            evTitle: 'Electric Trucks',
            evText: 'Various models of electric trucks for sustainable transportation.',
            aavTitle: 'Amphibious Armored Vehicle',
            aavText: 'PANUS is committed to advancing the development of autonomous amphibious armored vehicles (AAV) for land and sea operations.',
            uavTitle: 'Autonomous UAV',
            uavText: 'Multipurpose autonomous drones with ongoing research and development.',
            autonomousTitle: 'Autonomous Driving',
            autonomousText: 'Autonomous driving systems in legally defined routes.',
            selectTopic: 'Select a topic to view details',
            digitalSectionTitle: 'Digital Platform',
            digitalSectionText: 'We are developing an advanced digital platform to connect all mobility services, increase efficiency, and create a seamless experience for our customers.',
            sustainabilitySectionTitle: 'Sustainability',
            sustainabilitySectionText: 'Sustainability is at the heart of our business operations, from developing electric vehicles to environmentally friendly production processes, to create a better future for everyone.',
            marketTitle: 'Market Leader in Thailand',
            marketSubtitle: 'With excellence in innovation and quality, we hold the number one market share.',
            marketChartTitle: 'Trailer and Truck Market Share in Thailand (Approximate)',
            marketChartLabel: 'Market Share (%)',
            marketChartLabels: ['PANUS', 'Competitor A', 'Competitor B', 'Others'],
            timelineTitle: 'Future Timeline',
            timelineSubtitle: 'Our innovation and technology development plan for the next few years.',
            timeline2025Year: '2025',
            timeline2025Text: 'Launch and deliver new electric vehicle innovations to the market.',
            timeline2026Year: '2026',
            timeline2026Text: 'Begin testing Advanced Driver Assistance Systems (ADAS) technologies in controlled environments.',
            timeline2027Year: '2027',
            timeline2027Text: 'Fully expand our digital platform and sustainable solutions.',
            timeline2028Year: '2028',
            timeline2028Text: 'Step up to become a regional leader in commercial vehicle innovation.',
            contactTitle: 'Contact Us',
            contactSubtitle: 'Interested in our innovations or need more information? Contact us now.',
            companyName: 'PANUS Assembly Co., Ltd.',
            companyAddress1: '27/1 Moo 3',
            companyAddress2: 'Kood-ngong Sub-district, Phanat Nikhom District, Chon Buri 20140',
            companyPhone: '<strong>Phone:</strong> +66 38 462 102',
            companyEmail: '<strong>Email:</strong> wimol@panus.co.th',
            websiteButton: 'Visit Website',
            footerText: '&copy; 2025 PANUS Assembly Co., Ltd. All Rights Reserved.'
        }
    };

    function updateContent(lang) {
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        const mobilityDetailsContent = document.getElementById('mobility-details').children[0];
        if (mobilityDetailsContent && mobilityDetailsContent.tagName === 'P') {
            mobilityDetailsContent.innerText = translations[lang]['selectTopic'];
        }

        if (window.marketShareChart) {
            window.marketShareChart.options.plugins.title.text = translations[lang]['marketChartTitle'];
            window.marketShareChart.data.datasets[0].label = translations[lang]['marketChartLabel'];
            window.marketShareChart.data.labels = translations[lang]['marketChartLabels'];
            window.marketShareChart.update();
        }
    }

    
    logo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'th' ? 'en' : 'th';
        langToggleBtn.textContent = currentLang === 'th' ? 'EN' : 'TH';
        document.documentElement.lang = currentLang;
        updateContent(currentLang);
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => {
                if (content.id === tab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    const mobilityCards = document.querySelectorAll('.mobility-card');
    const mobilityDetails = document.getElementById('mobility-details');
    const mobilityContent = {
        'mobility-ev': {
            'th': { title: 'Electric Trucks', text: 'รถบรรทุกไฟฟ้าหลากหลายรุ่นเพื่อการขนส่งที่ยั่งยืน' },
            'en': { title: 'Electric Trucks', text: 'Various models of electric trucks for sustainable transportation.' }
        },
        'mobility-aav': {
            'th': { title: 'Amphibious Armored Vehicle', text: 'PANUS มุ่งมั่นที่จะพัฒนาการสร้างยานยนต์สะเทินน้ำสะเทินบกแบบมีเกราะหุ้ม (AAV) สำหรับปฏิบัติการทางบกและในทะเล' },
            'en': { title: 'Amphibious Armored Vehicle', text: 'PANUS is committed to advancing the development of autonomous amphibious armored vehicles (AAV) for land and sea operations.' }
        },
        'mobility-uav': {
            'th': { title: 'Autonomous UAV', text: 'โดรนอัตโนมัติอเนกประสงค์ พร้อมวิจัยและพัฒนาต่อยอด' },
            'en': { title: 'Autonomous UAV', text: 'Multipurpose autonomous drones with ongoing research and development.' }
        },
        'mobility-autonomous': {
            'th': { title: 'Autonomous Driving', text: 'ระบบขับขี่อัตโนมัติในเส้นทางที่กำหนดตามกฎหมาย' },
            'en': { title: 'Autonomous Driving', text: 'Autonomous driving systems in legally defined routes.' }
        }
    };

    mobilityCards.forEach(card => {
        card.addEventListener('click', () => {
            const contentKey = card.dataset.content;
            const content = mobilityContent[contentKey][currentLang];
            mobilityDetails.innerHTML = `
                        <div class="text-center">
                            <h5 class="text-2xl font-bold text-panus-gold mb-2">${content.title}</h5>
                            <p>${content.text}</p>
                        </div>
                    `;
        });
    });

    const ctx = document.getElementById('marketShareChart').getContext('2d');
    window.marketShareChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: translations[currentLang].marketChartLabels,
            datasets: [{
                label: translations[currentLang].marketChartLabel,
                data: [45, 25, 15, 15],
                backgroundColor: [
                    '#0d2d52',
                    '#6c757d',
                    '#adb5bd',
                    '#ced4da'
                ],
                borderColor: [
                    '#c89a4b'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: translations[currentLang].marketChartTitle,
                    font: {
                        size: 16,
                        family: "'Sarabun', sans-serif"
                    },
                    color: '#333'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 50,
                    ticks: {
                        callback: function (value) {
                            return value + '%'
                        }
                    }
                }
            }
        }
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (mobileMenu.offsetParent !== null) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

});