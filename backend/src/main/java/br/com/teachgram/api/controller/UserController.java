package br.com.teachgram.api.controller;

import br.com.teachgram.api.domain.user.dto.DeleteResponseDTO;
import br.com.teachgram.api.domain.user.dto.UpdateRequestDTO;
import br.com.teachgram.api.domain.user.dto.UserDetailsDTO;
import br.com.teachgram.api.service.UserService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PutMapping
    @Transactional
    public ResponseEntity<UserDetailsDTO> update(@RequestBody @Valid UpdateRequestDTO dto) {
        return ResponseEntity.ok(userService.update(dto));
    }

    @DeleteMapping
    @Transactional
    public ResponseEntity<DeleteResponseDTO> delete() {
        return ResponseEntity.ok().body(userService.delete());
    }

    @GetMapping("/details")
    public ResponseEntity<UserDetailsDTO> details() {
        return ResponseEntity.ok().body(userService.details());
    }

}