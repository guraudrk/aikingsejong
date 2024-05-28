package com.example.kingsejong.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Board")
@Data
public class Board {

    // 게시판 table을 생성하는 entity 코드.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private LocalDateTime createdDate = LocalDateTime.now();
    private String userId;

    // getter와 setter는 Data 어노테이션으로 대체되었다.

    @PrePersist
    protected void onCreate() {
        createdDate = LocalDateTime.now();
    }
}
