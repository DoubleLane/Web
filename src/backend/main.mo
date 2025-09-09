import OrderedMap "mo:base/OrderedMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";

persistent actor {
  transient let textMap = OrderedMap.Make<Text>(Text.compare);

  var documentation = textMap.fromIter<Text>(
    Iter.fromArray([
      ("introduction", "SimpleBlockchain is a basic blockchain implementation designed for educational purposes. It demonstrates core blockchain concepts such as blocks, chains, and proof of work."),
      ("features", "- Block creation\n- Chain validation\n- Proof of work\n- Simple transaction system"),
      ("installation", "1. Clone the repository\n2. Install dependencies\n3. Run the application"),
      ("usage", "Use the provided CLI to interact with the blockchain. Add blocks, validate the chain, and experiment with proof of work."),
      ("contributing", "Contributions are welcome! Please submit pull requests or open issues for any improvements or bugs."),
      ("license", "This project is licensed under the MIT License."),
      ("contact", "For questions or support, contact the project maintainer at support@simpleblockchain.com"),
    ])
  );

  public query func getSection(section : Text) : async ?Text {
    textMap.get(documentation, section);
  };

  public query func getAllSections() : async [(Text, Text)] {
    Iter.toArray(textMap.entries(documentation));
  };
};
