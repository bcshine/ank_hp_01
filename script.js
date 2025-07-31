// 문서가 완전히 로드된 후 실행되는 함수에요
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 화면에서 로고와 브랜드 이름을 감싸는 컨테이너를 만들어요
    const header = document.querySelector('.main-header');
    const logo = document.querySelector('.logo');
    const brandName = document.querySelector('.brand-name');
    
    // 화면 크기가 변할 때 실행되는 함수에요
    function handleResize() {
        // 화면 너비가 768px 이하인지 확인해요 (모바일 화면)
        if (window.innerWidth <= 768) {
            // 이미 로고 컨테이너가 있는지 확인해요
            if (!document.querySelector('.logo-container')) {
                // 로고 컨테이너를 만들어요
                const logoContainer = document.createElement('div');
                logoContainer.className = 'logo-container';
                
                // 로고와 브랜드 이름을 컨테이너에 넣어요
                header.removeChild(logo);
                header.removeChild(brandName);
                logoContainer.appendChild(logo);
                logoContainer.appendChild(brandName);
                
                // 컨테이너를 헤더의 맨 앞에 추가해요
                header.insertBefore(logoContainer, header.firstChild);
            }
        } else {
            // 화면이 큰 경우 (데스크톱 화면)
            const logoContainer = document.querySelector('.logo-container');
            if (logoContainer) {
                // 로고 컨테이너가 있으면 원래대로 돌려놓아요
                logoContainer.removeChild(logo);
                logoContainer.removeChild(brandName);
                header.removeChild(logoContainer);
                
                // 로고와 브랜드 이름을 원래 위치에 넣어요
                header.insertBefore(brandName, header.firstChild);
                header.insertBefore(logo, header.firstChild);
            }
        }
    }
    
    // 페이지 로드 시 한 번 실행해요
    handleResize();
    
    // 화면 크기가 변할 때마다 함수를 실행해요
    window.addEventListener('resize', handleResize);
    
    // 히어로 캐러셀 기능 구현
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let currentSlide = 0;
    let slideInterval;
    
    // 슬라이드 변경 함수
    function changeSlide(n) {
        // 현재 활성화된 슬라이드의 active 클래스 제거
        slides[currentSlide].classList.remove('active');
        
        // 새로운 슬라이드 인덱스 계산
        currentSlide = (n + slides.length) % slides.length;
        
        // 새 슬라이드에 active 클래스 추가
        slides[currentSlide].classList.add('active');
    }
    
    // 다음 슬라이드로 이동하는 함수
    function nextSlide() {
        changeSlide(currentSlide + 1);
    }
    
    // 이전 슬라이드로 이동하는 함수
    function prevSlide() {
        changeSlide(currentSlide - 1);
    }
    
    // 자동 슬라이드 시작 함수
    function startSlideShow() {
        // 이미 실행 중인 인터벌이 있다면 중지
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        
        // 5초마다 다음 슬라이드로 이동
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // 화살표 버튼 클릭 이벤트 추가
    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', function() {
            prevSlide();
            // 자동 슬라이드 재시작
            startSlideShow();
        });
        
        rightArrow.addEventListener('click', function() {
            nextSlide();
            // 자동 슬라이드 재시작
            startSlideShow();
        });
    }
    
    // 슬라이드가 있을 경우 자동 슬라이드 시작
    if (slides.length > 0) {
        startSlideShow();
    }
    
    // 로그인 버튼 클릭 시 실행되는 함수에요
    const loginButton = document.querySelector('.login-btn');
    loginButton.addEventListener('click', function() {
        // 로그인 버튼을 클릭하면 알림창을 보여줘요
        alert('로그인 페이지로 이동합니다!');
        // 실제로는 여기에 로그인 페이지로 이동하는 코드를 넣을 수 있어요
        // window.location.href = 'login.html';
    });
    
    // 인사말 더보기/닫기 버튼 기능 구현
    const readMoreBtn = document.getElementById('read-more-btn');
    const closeBtn = document.getElementById('close-btn');
    const shortGreeting = document.getElementById('short-greeting');
    const fullGreeting = document.getElementById('full-greeting');
    
    // 더보기 버튼 클릭 이벤트
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            // 짧은 인사말 숨기기
            shortGreeting.style.display = 'none';
            // 전체 인사말 보이기
            fullGreeting.style.display = 'block';
            // 더보기 버튼 숨기기
            readMoreBtn.style.display = 'none';
            // 닫기 버튼 보이기
            closeBtn.style.display = 'inline-block';
        });
    }
    
    // 닫기 버튼 클릭 이벤트
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            // 전체 인사말 숨기기
            fullGreeting.style.display = 'none';
            // 짧은 인사말 보이기
            shortGreeting.style.display = 'block';
            // 닫기 버튼 숨기기
            closeBtn.style.display = 'none';
            // 더보기 버튼 보이기
            readMoreBtn.style.display = 'inline-block';
        });
    }
});