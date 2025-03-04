package angel.campos.helpdesk

import RecyclerViewHelpers.Adaptador
import androidx.recyclerview.widget.RecyclerView
import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import modelo.ClaseConexion
import modelo.tbTickets

class VisualizacionTickets : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_visualizacion_tickets)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        val rcvTickets = findViewById<RecyclerView>(R.id.rcvTickets)

        rcvTickets.layoutManager = LinearLayoutManager(this)

        fun obtenerTickets(): List<tbTickets>{
            val objConexion = ClaseConexion().cadenaConexion()

            val statement = objConexion?.createStatement()
            val resultSet = statement?.executeQuery("SELECT * FROM tbTicket")!!

            val listaTickets = mutableListOf<tbTickets>()

            while (resultSet.next()){
                val numeroTicket = resultSet.getString("NumeroTicket")
                val tituloTicket = resultSet.getString("TituloTicket")
                val descripcionTicket = resultSet.getString("DescripcionTicket")
                val nombreRespTicket = resultSet.getString("NombreRespTicket")
                val email = resultSet.getString("Email")
                val telefono = resultSet.getString("Telefono")
                val ubicacion = resultSet.getString("Ubicacion")

                val valoresJuntos = tbTickets(numeroTicket, tituloTicket, descripcionTicket, nombreRespTicket, email, telefono, ubicacion)

                listaTickets.add(valoresJuntos)
            }
            return listaTickets
        }
        CoroutineScope(Dispatchers.IO).launch {
            val ticketDB = obtenerTickets()
            withContext(Dispatchers.Main){
                val adapter = Adaptador(ticketDB)
                rcvTickets.adapter = adapter
            }
        }

    }
}