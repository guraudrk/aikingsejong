package com.example.kingsejong.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.kingsejong.entity.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

    // 게시판에 대한 repository.

}
