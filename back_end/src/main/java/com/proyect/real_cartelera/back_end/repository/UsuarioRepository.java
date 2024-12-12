package com.proyect.real_cartelera.back_end.repository;

import com.proyect.real_cartelera.back_end.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByGmailAndPassword(String gmail, String password);
}