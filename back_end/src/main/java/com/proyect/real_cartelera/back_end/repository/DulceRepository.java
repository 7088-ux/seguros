package com.proyect.real_cartelera.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.proyect.real_cartelera.back_end.model.Dulce;

import java.util.List;

@Repository
public interface DulceRepository extends JpaRepository<Dulce, Long> {
    List<Dulce> findAllByEstado(String estado);
}
