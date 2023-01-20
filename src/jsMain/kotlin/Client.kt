import dev.rivu.rivutalks.Singleton.Prefix
import kotlinx.browser.document
import react.create
import react.dom.client.createRoot

fun main() {
    val container = document.createElement("div")
    document.body!!.appendChild(container)

    val welcome = Welcome.create {
        name = Prefix + " Kotlin/JS"
    }
    createRoot(container).render(welcome)
}