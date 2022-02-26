module ApplicationHelper
  def react_component(component_name, props = {})
    print(props.to_json)
    tag.div(data: {
              react_component: component_name,
              props: props.to_json
            }) { '' }
  end
end
