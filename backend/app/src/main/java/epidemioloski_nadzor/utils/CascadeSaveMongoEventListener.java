// package epidemioloski_nadzor.utils;

// import org.bson.types.ObjectId;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
// import org.springframework.data.annotation.Id;
// import org.springframework.data.mapping.MappingException;
// import org.springframework.data.mongodb.core.MongoOperations;
// import org.springframework.data.mongodb.core.mapping.DBRef;
// import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
// import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
// import org.springframework.stereotype.Component;
// import org.springframework.util.ReflectionUtils;
 
// import java.lang.reflect.Field;

// public class CascadeSaveMongoEventListener extends AbstractMongoEventListener<Object> {
 
//     @Autowired
//     private MongoOperations mongoOperations;
 
//     @Override
//     public void onBeforeConvert(BeforeConvertEvent<Object> event) { 
//         Object source = event.getSource(); 
//         ReflectionUtils.doWithFields(source.getClass(), 
//           new CascadeCallback(source, mongoOperations));
//     }
// }