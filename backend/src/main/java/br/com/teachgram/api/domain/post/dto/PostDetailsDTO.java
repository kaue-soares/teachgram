package br.com.teachgram.api.domain.post.dto;

import br.com.teachgram.api.infra.constant.VAR;
import br.com.teachgram.api.domain.post.Post;

import java.time.ZoneOffset;

public record PostDetailsDTO(
        String id,
        String description,
        String photoLink,
        String videoLink,
        Integer likes,
        String userId,
        String username,
        String userPhotoLink,
        Long createdAt
) {
    public PostDetailsDTO(Post post) {
        this(
                post.getId(),
                post.getDescription(),
                post.getPhotoLink(),
                post.getVideoLink(),
                post.getLikes(),
                post.getUser().getId(),
                post.getUser().getActualUsername(),
                post.getUser().getPhoto(),
                post.getCreatedAt().toInstant(ZoneOffset.of(VAR.OFFSET)).toEpochMilli()
        );
    }
}
