package com.example.kingsejong.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.disable()) // 필요한 경우 CSRF 비활성화
        .authorizeHttpRequests(authorize -> authorize
            .requestMatchers("/api/checkemail", "/api/checkid", "/api/signup", "/api/login", "/api/login",
                "/api/findid")
            .permitAll() // 인증 없이 접근 허용
            .anyRequest().authenticated())
        .formLogin(form -> form
            .loginPage("/login")
            .permitAll())
        .logout(logout -> logout
            .permitAll());

    return http.build();
  }
}
