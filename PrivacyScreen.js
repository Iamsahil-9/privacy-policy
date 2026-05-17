import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function PrivacyScreen({ navigation }) {
  return (
    <LinearGradient colors={["#020617", "#0f172a", "#1e1b4b"]} style={styles.bg}>
      <StatusBar barStyle="light-content" backgroundColor="#020617" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
            activeOpacity={0.85}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.headerText}>
            <Text style={styles.kicker}>USER DATA & SAFETY</Text>
            <Text style={styles.title}>Privacy Policy</Text>
          </View>
        </View>

        <LinearGradient
          colors={["#22c55e", "#0f766e", "#0f172a"]}
          style={styles.heroBorder}
        >
          <View style={styles.heroCard}>
            <View style={styles.heroIcon}>
              <Ionicons name="shield-checkmark" size={34} color="#111827" />
            </View>

            <Text style={styles.heroTitle}>Your Privacy Matters</Text>
            <Text style={styles.heroText}>
              We protect your personal information and use only the data required
              to operate rewards, wallet, referrals and app security features.
            </Text>
          </View>
        </LinearGradient>

        <PolicySection title="1. Information We Collect" icon="person-outline">
          We may collect basic account information such as your name, mobile
          number, referral code, wallet activity, completed tasks, device
          information and app usage activity. This helps us provide rewards,
          prevent fraud and improve app performance.
        </PolicySection>

        <PolicySection title="2. How We Use Your Data" icon="analytics-outline">
          Your data is used to create your account, track completed tasks,
          calculate coins, manage wallet balance, process withdrawal requests,
          provide referral benefits, improve user experience and maintain app
          security.
        </PolicySection>

        <PolicySection title="3. Wallet & Withdrawal Data" icon="wallet-outline">
          For withdrawal requests, we may collect payout details such as UPI ID,
          requested amount, transaction status and request history. This
          information is used only to process payouts and maintain records.
        </PolicySection>

        <PolicySection title="4. Advertising & Third-Party Services" icon="megaphone-outline">
          This app may show ads through third-party advertising services such as
          Google AdMob. These services may collect device identifiers, ad
          interaction data and usage information as per their own privacy
          policies.
        </PolicySection>

        <PolicySection title="5. Data Sharing" icon="share-social-outline">
          We do not sell your personal data. We may share limited information
          only with trusted service providers when required for app operation,
          analytics, advertising, fraud prevention, legal compliance or payment
          processing.
        </PolicySection>

        <PolicySection title="6. Security" icon="lock-closed-outline">
          We use reasonable security measures to protect user data from
          unauthorized access, misuse or loss. However, no online system is 100%
          secure, so users should keep their login details private.
        </PolicySection>

        <PolicySection title="7. Fake Activity & Fraud Prevention" icon="warning-outline">
          We may monitor app activity to detect fake accounts, duplicate users,
          automated activity, suspicious task completion or reward abuse.
          Violating users may be restricted, suspended or permanently blocked.
        </PolicySection>

        <PolicySection title="8. User Rights" icon="settings-outline">
          Users may request correction or deletion of their personal data,
          subject to legal, security, fraud-prevention and transaction-record
          requirements.
        </PolicySection>

        <PolicySection title="9. Children’s Privacy" icon="people-outline">
          This app is not intended for children below the required legal age in
          their region. Users should use this app only if they are legally
          allowed to participate in reward-based apps.
        </PolicySection>

        <PolicySection title="10. Policy Updates" icon="refresh-outline">
          We may update this Privacy Policy from time to time. Continued use of
          the app after updates means you agree to the revised policy.
        </PolicySection>

        <View style={styles.noteBox}>
          <Ionicons name="information-circle" size={20} color="#38bdf8" />
          <Text style={styles.noteText}>
            Last updated: April 2026. For support or privacy-related requests,
            contact the app support team.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const PolicySection = ({ title, icon, children }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.cardIcon}>
        <Ionicons name={icon} size={21} color="#facc15" />
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>

    <Text style={styles.cardText}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 18,
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 0) + 14 : 20,
    paddingBottom: 34,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backBtn: {
    width: 46,
    height: 46,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    marginLeft: 12,
    flex: 1,
  },

  kicker: {
    color: "#facc15",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.4,
  },

  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 3,
  },

  heroBorder: {
    borderRadius: 32,
    padding: 1.5,
    marginBottom: 16,
  },

  heroCard: {
    borderRadius: 31,
    padding: 24,
    alignItems: "center",
    backgroundColor: "rgba(15,23,42,0.96)",
  },

  heroIcon: {
    width: 76,
    height: 76,
    borderRadius: 28,
    backgroundColor: "#22c55e",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "900",
  },

  heroText: {
    color: "#cbd5e1",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 21,
    marginTop: 8,
    fontWeight: "600",
  },

  card: {
    borderRadius: 24,
    padding: 17,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.13)",
    marginBottom: 12,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  cardIcon: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: "rgba(250,204,21,0.11)",
    borderWidth: 1,
    borderColor: "rgba(250,204,21,0.25)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  cardTitle: {
    flex: 1,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
  },

  cardText: {
    color: "#cbd5e1",
    fontSize: 13,
    lineHeight: 21,
    fontWeight: "600",
  },

  noteBox: {
    flexDirection: "row",
    gap: 10,
    borderRadius: 22,
    padding: 16,
    backgroundColor: "rgba(56,189,248,0.1)",
    borderWidth: 1,
    borderColor: "rgba(56,189,248,0.25)",
    marginTop: 4,
  },

  noteText: {
    flex: 1,
    color: "#bae6fd",
    fontSize: 13,
    lineHeight: 20,
    fontWeight: "700",
  },
});