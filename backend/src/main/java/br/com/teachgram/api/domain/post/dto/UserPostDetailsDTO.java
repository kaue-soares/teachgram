package br.com.teachgram.api.domain.post.dto;

import br.com.teachgram.api.domain.post.Post;

public record UserPostDetailsDTO(
        String id,
        String description,
        String photoLink,
        String videoLink,
        Integer likes,
        String userId,
        String username,
        String userPhotoLink
) {
    public UserPostDetailsDTO(Post post) {
        this(
                post.getId(),
                post.getDescription(),
                post.getPhotoLink(),
                post.getVideoLink(),
                post.getLikes(),
                post.getUser().getId(),
                post.getUser().getName(),
                post.getUser().getPhoto()
        );
    }
}
