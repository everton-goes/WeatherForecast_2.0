package com.teste.web.hbsis.weatherforecast.controllers;

import com.teste.web.hbsis.weatherforecast.config.exception.BadRequestException;
import com.teste.web.hbsis.weatherforecast.model.Cidade;
import com.teste.web.hbsis.weatherforecast.service.CidadeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cidades")
public class CidadeController {

	private static final Logger LOG = LoggerFactory.getLogger(CidadeController.class);

	private CidadeService cidadeService;

	@Autowired
	public CidadeController(CidadeService cidadeService){
	    this.cidadeService = cidadeService;
    }

	@PostMapping
	public ResponseEntity cadastrarCidade(@RequestBody Cidade cidade) {
		try{
			cidadeService.salvarCidade(cidade);
		}catch (BadRequestException ex) {
			throw new BadRequestException("Cidade já cadastrada!");
		}catch (Exception e){
			LOG.error("Erro ao cadastrar a cidade. " , e);
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity(cidade, HttpStatus.CREATED);
	}

	@GetMapping
	public List<Cidade> listaCidades(){
		return cidadeService.listarCidades();
	}

	@GetMapping("/{id}")
	public Optional<Cidade> buscaCidadePorId(@PathVariable("id") Long id){
		return cidadeService.findById(id);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity excluirCidade(@PathVariable("id") Long id) {
		try{
			cidadeService.excluirCidade(id);
		}catch (Exception e){
			LOG.error("Erro ao excluir a cidade. ", e);
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity(HttpStatus.OK);
	}

}
