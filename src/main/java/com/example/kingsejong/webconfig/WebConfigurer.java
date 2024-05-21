package com.example.kingsejong.webconfig;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import jakarta.annotation.Nonnull;

@Configuration
public class WebConfigurer implements WebMvcConfigurer {

    /*
     * 
     * 1.WebMvcConfigurer는 Spring MVC를 사용해서 웹 애플리케이션을 구성하는 데 사용되는
     * 인터페이스이다. 이 인터페이스를 구현하면, Spring MVC의 다양한 구성 요소에 대한 사용자 정의 구성을 할 수 있다.
     * 
     * 
     * 2.Spring MVC는 JAVA 기반의 웹 애플리케이션을 구축하기 위한 프레임워크 중 하나이다.
     * 이를 통해 웹 애플리케이션의 개발을 간소화하고 관리하기 쉽게 만들어준다.
     * 
     * 클라이언트의 요청을 처리하고, 응답을 생성하고, 애플리케이션의 비즈니스 로직을 실행하는데 사용된다.
     * 
     * M는 모델이다. 모델은 비즈니스 로직과 데이터를 나타낸다.
     * V는 뷰이다. HTML,thymeleaf 등의 템플릿 엔진을 사용해서 생성될 수 있다.
     * C는 컨트롤러이다. 컨트롤러는 클라이언트의 요청을 받아 해당 요청을 처리하고 적절한 응답을 생성한다.
     * 
     */

    @Override
    @Nonnull
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) { // 백엔드에서 프론트엔드로의 통신에 대한 cors 정책을
                                                                                   // 제어한다.
        registry.addMapping("/**") // cors를 적용할 엔드포인트 패턴을 지정한다.
                .allowedOrigins("http://localhost:3000") // 허용할 오리진 지정
                .allowedMethods("GET", "POST", "PUT") // 허용할 http 메서드를 설정
                .allowedHeaders("*");
    }

}
