package angel.campos.helpdesk

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import modelo.ClaseConexion
import java.util.UUID

class Registrarse : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_registrarse)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        val btnInicioSesionV = findViewById<Button>(R.id.btnVentanaInicioSesion)
        val btnRegistrar = findViewById<Button>(R.id.btnRegistrarse)
        val txtRegistrarUsuario = findViewById<EditText>(R.id.txtRegistrarUsuario)
        val txtRegistrarContrasena = findViewById<EditText>(R.id.txtRegistarContrasena)

        btnInicioSesionV.setOnClickListener {
            val intent: Intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }

        btnRegistrar.setOnClickListener {
            val intent: Intent = Intent(this, Tickets::class.java)
            startActivity(intent)

            GlobalScope.launch(Dispatchers.IO) {
                val objConexion = ClaseConexion().cadenaConexion()

                val crearUsuario = objConexion?.prepareStatement("INSERT INTO tbUsuario1(UUID_usuario, Usuario, Contraseña) VALUES (?, ?, ?)" )!!
                crearUsuario.setString(1, UUID.randomUUID().toString())
                crearUsuario.setString(2, txtRegistrarUsuario.text.toString())
                crearUsuario.setString(3, txtRegistrarContrasena.text.toString())
                crearUsuario.executeUpdate()

                withContext(Dispatchers.Main){
                    Toast.makeText(this@Registrarse, "Usuario Creado", Toast.LENGTH_SHORT).show()
                    txtRegistrarUsuario.setText("")
                    txtRegistrarContrasena.setText("")
                }
            }
        }
    }
}