package com.proyect.real_cartelera.back_end.controller;

import com.proyect.real_cartelera.back_end.model.Usuario;
import com.proyect.real_cartelera.back_end.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    // Obtener todos los usuarios
    @GetMapping
    public List<Usuario> getAllUsuarios() {
        return usuarioService.getAllUsuarios();
    }

    // Obtener un usuario por ID
    @GetMapping("/{id}")
    public Optional<Usuario> getUsuarioById(@PathVariable Long id) {
        return usuarioService.getUsuarioById(id);
    }

    // Crear un nuevo usuario (Registro de usuario)
    @PostMapping("/registro")
    public ResponseEntity<Usuario> createUsuario(@RequestBody Usuario usuario) {
        try {
            Usuario nuevoUsuario = usuarioService.createUsuario(
                usuario.getNombre(),
                usuario.getGmail(),
                usuario.getPassword(),
                usuario.getCelular()
            );
            return ResponseEntity.ok(nuevoUsuario); // Retorna el usuario creado si todo va bien
        } catch (Exception e) {
            return ResponseEntity.status(500).build(); // Error de servidor
        }
    }

    // Iniciar sesión
    @PostMapping("/login")
    public ResponseEntity<Usuario> loginUsuario(@RequestBody Usuario usuario) {
        Optional<Usuario> usuarioAutenticado = usuarioService.authenticateUser(usuario.getGmail(), usuario.getPassword());
        if (usuarioAutenticado.isPresent()) {
            return ResponseEntity.ok(usuarioAutenticado.get()); // Retorna el usuario autenticado
        } else {
            return ResponseEntity.status(401).build(); // Retorna 401 si las credenciales son inválidas
        }
    }

    // Actualizar un usuario existente
    @PutMapping("/{id}")
    public Usuario updateUsuario(@PathVariable Long id,
                                  @RequestBody Usuario usuarioActualizado) {
        return usuarioService.updateUsuario(id, 
                usuarioActualizado.getNombre(),
                usuarioActualizado.getGmail(),
                usuarioActualizado.getPassword(),
                usuarioActualizado.getCelular());
    }

    // Eliminar un usuario
    @DeleteMapping("/{id}")
    public void deleteUsuario(@PathVariable Long id) {
        usuarioService.deleteUsuario(id);
    }
}