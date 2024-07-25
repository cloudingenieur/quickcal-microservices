package com.cloudingenieur.booking.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.context.annotation.Configuration;

import jakarta.persistence.Tuple;
import jakarta.persistence.TupleElement;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class JsonConverter {

    public List<ObjectNode> _toJson(List<Tuple> results) {
        List<ObjectNode> json = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();

        for (Tuple t : results) {
            List<TupleElement<?>> cols = t.getElements();
            ObjectNode node = mapper.createObjectNode();

            for (TupleElement col : cols) {
                node.put(col.getAlias(), t.get(col.getAlias()).toString());
            }
            json.add(node);
        }
        return json;
    }
}