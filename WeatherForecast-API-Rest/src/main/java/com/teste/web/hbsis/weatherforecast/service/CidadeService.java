package com.teste.web.hbsis.weatherforecast.service;

import com.teste.web.hbsis.weatherforecast.config.exception.BadRequestException;
import com.teste.web.hbsis.weatherforecast.model.Cidade;
import com.teste.web.hbsis.weatherforecast.repository.CidadeRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CidadeService {

    private CidadeRepositorio cidadeRepositorio;

    @Autowired
    public CidadeService(CidadeRepositorio cidadeRepositorio){
        this.cidadeRepositorio = cidadeRepositorio;
    }

    public Optional<Cidade> buscaCidade(Long idCidade){
        return cidadeRepositorio.findByidCidade(idCidade);
    }

    public Optional<Cidade> findById(Long id){
        return cidadeRepositorio.findById(id);
    }

    public void salvarCidade(Cidade cidade){
        if(buscaCidade(cidade.getIdCidade()).isPresent()){
            throw new BadRequestException();
        }else {
            cidade.setIdCidade(cidade.getIdCidade());
            cidade.setNomeCidade(cidade.getNomeCidade());
            cidade.setSiglaPais(cidade.getSiglaPais());

            cidadeRepositorio.save(cidade);
        }
    }

    public List<Cidade> listarCidades(){
        return cidadeRepositorio.findAll();
    }

    public void excluirCidade(Long id) {
        cidadeRepositorio.deleteById(id);
    }
}
