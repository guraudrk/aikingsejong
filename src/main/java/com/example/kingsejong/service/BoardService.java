package com.example.kingsejong.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.kingsejong.entity.Board;
import com.example.kingsejong.repository.BoardRepository;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardrepository;


    //모든 boards를 찾는 코드. list를 정의한다.
    public List<Board> getAllBoards() {
        return boardrepository.findAll();
    }

    public Board getBoardById(Long id){

        //아이디를 찾고 찾지 못하면 null 반환.
        return boardrepository.findById(id).orElse(null);
    }


    //작성한 게시물을 저장하는 service.
    public Board createPost(Board board){
        return boardrepository.save(board);
    }

}
