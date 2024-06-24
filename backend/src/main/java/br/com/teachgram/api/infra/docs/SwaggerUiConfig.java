package br.com.teachgram.api.infra.docs;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class SwaggerUiConfig {

    @Bean
    public OpenAPI customizeOpenAPI() {
        final String bearerAuth = "bearerAuth";

        OpenAPI openAPI = new OpenAPI();

        openAPI.info(new Info()
                .title("Teachgram API")
                .version("1.0")
                .description("A simple API to manage users and posts."));

        openAPI.addSecurityItem(new SecurityRequirement()
                        .addList(bearerAuth))
                .components(new Components()
                        .addSecuritySchemes(bearerAuth, new SecurityScheme()
                                .name(bearerAuth)
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")));

        return openAPI;
    }
}
