package com.teste.web.hbsis.weatherforecast.repository;

import com.teste.web.hbsis.weatherforecast.model.Cidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CidadeRepositorio extends JpaRepository<Cidade, Long> {

    Optional<Cidade> findByidCidade(Long idCidade);

    Optional<Cidade> findById(Long id);
}
