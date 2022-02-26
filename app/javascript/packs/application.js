import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import mount from '../mount';
import "channels"

// React Components
import Books from "../components/Book/book_container"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

mount({Books})