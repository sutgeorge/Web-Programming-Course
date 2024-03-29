package com.uppicvote.service;

import com.uppicvote.model.Image;
import com.uppicvote.repository.Repository;

import java.util.List;

public class ImageService {
    private Repository repository;

    public ImageService(Repository repository) {
        this.repository = repository;
    }

    public List<Image> getAllImages() {
        return this.repository.getAllImages();
    }

    public List<Image> getTheTopNImages(Integer topN) {
        return this.repository.getTheTopNImages(topN);
    }

    public boolean saveImage(Image image) {
        return this.repository.saveImage(image).isPresent();
    }

    public boolean updateImage(Image image) {
        return this.repository.updateImage(image);
    }

    public boolean upvoteImage(Image image, Integer userId) {
        return this.repository.modifyVote(image, userId, 1);
    }

    public boolean downvoteImage(Image image, Integer userId) {
        return this.repository.modifyVote(image, userId, -1);
    }

    public List<Image> getUserImages(Integer userId) {
        return this.repository.getUserImages(userId);
    }
}
