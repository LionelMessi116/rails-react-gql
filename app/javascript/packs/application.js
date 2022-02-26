import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import mount from '../mount';
import "channels"

// React Components
import Hello from "../hello_react"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

mount({Hello})