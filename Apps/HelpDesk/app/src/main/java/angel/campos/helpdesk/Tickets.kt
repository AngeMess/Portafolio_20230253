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
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import modelo.ClaseConexion
import java.util.UUID

class Tickets : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_tickets)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        val btnAgregarTicket = findViewById<Button>(R.id.btnAgregarTicket)
        val btnVerTickets = findViewById<Button>(R.id.btnVerTickets)
        val txtTitulo = findViewById<EditText>(R.id.txtTitulo)
        val txtDescripcion = findViewById<EditText>(R.id.txtDescripcion)
        val txtNombre = findViewById<EditText>(R.id.txtResponsable)
        val txtEmail = findViewById<EditText>(R.id.txtEmail)
        val txtTelefono = findViewById<EditText>(R.id.txtTelefono)
        val txtUbicacion = findViewById<EditText>(R.id.txtUbicacion)

        btnVerTickets.setOnClickListener {
            val intent: Intent = Intent(this, VisualizacionTickets::class.java)
            startActivity(intent)
        }

        btnAgregarTicket.setOnClickListener {
            CoroutineScope(Dispatchers.IO).launch {
                val objConexion = ClaseConexion().cadenaConexion()

                val agregarTicket = objConexion?.prepareStatement("INSERT INTO tbTicket (NumeroTicket, TituloTicket, DescripcionTicket, NombreRespTicket, Email, Telefono, Ubicacion) VALUES (?, ?, ?, ?, ?, ?, ?)")!!
                agregarTicket.setString(1, UUID.randomUUID().toString())
                agregarTicket.setString(2, txtTitulo.text.toString())
                agregarTicket.setString(3, txtDescripcion.text.toString())
                agregarTicket.setString(4, txtNombre.text.toString())
                agregarTicket.setString(5, txtEmail.text.toString())
                agregarTicket.setString(6, txtTelefono.text.toString())
                agregarTicket.setString(7, txtUbicacion.text.toString())
                agregarTicket.executeUpdate()

                withContext(Dispatchers.Main){
                    Toast.makeText(this@Tickets, "Ticket Agregado", Toast.LENGTH_SHORT).show()
                    txtTitulo.setText("")
                    txtDescripcion.setText("")
                    txtNombre.setText("")
                    txtEmail.setText("")
                    txtTelefono.setText("")
                    txtUbicacion.setText("")
                }
            }
        }
    }
}