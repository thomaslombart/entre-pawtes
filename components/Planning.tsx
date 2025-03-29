"use client";

import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { useState, useEffect } from "react";

import Info from "@/components/Info";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ActivityType =
  | "PHYSICAL"
  | "MENTAL"
  | "OLFACTORY"
  | "CHEWING"
  | "REST"
  | "MEAL";

type DistributionType = "bowl" | "enrichment" | "grass";
type WalkingStyle = "pulling" | "sniffing";

interface Activity {
  id: string;
  name: string;
  type: ActivityType;
  color: string;
  hasDistributionType?: boolean;
  defaultDuration: number;
  hasWalkingStyle?: boolean;
}

interface PlannedActivity {
  id: string;
  activity: Activity;
  startTime: string;
  endTime: string;
  duration: number;
  distributionType?: DistributionType;
  walkingStyle?: WalkingStyle;
}

const predefinedActivities: Activity[] = [
  {
    id: "pee-break",
    name: "Pause pipi",
    type: "PHYSICAL",
    color: "bg-blue-400",
    defaultDuration: 15,
  },
  {
    id: "walk",
    name: "Promenade",
    type: "PHYSICAL",
    color: "bg-blue-600",
    defaultDuration: 45,
    hasWalkingStyle: true,
  },
  {
    id: "sniffing",
    name: "Jeu de flair",
    type: "OLFACTORY",
    color: "bg-green-400",
    defaultDuration: 30,
  },
  {
    id: "chewing",
    name: "Mastication",
    type: "CHEWING",
    color: "bg-orange-400",
    defaultDuration: 15,
  },
  {
    id: "training",
    name: "Training",
    type: "MENTAL",
    color: "bg-purple-400",
    defaultDuration: 15,
  },
  {
    id: "cuddles",
    name: "Calins",
    type: "REST",
    color: "bg-pink-400",
    defaultDuration: 15,
  },
  {
    id: "rest",
    name: "Repos",
    type: "REST",
    color: "bg-gray-400",
    defaultDuration: 15,
  },
  {
    id: "meal",
    name: "Repas",
    type: "MEAL",
    color: "bg-yellow-400",
    hasDistributionType: true,
    defaultDuration: 15,
  },
];

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 10,
    width: 120,
    height: 120,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    textAlign: "center",
    color: "#1e293b",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#64748b",
    marginBottom: 5,
  },
  instagramContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  instagramLogo: {
    width: 16,
    height: 16,
  },
  instagram: {
    fontSize: 12,
    color: "#64748b",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 15,
    color: "#1e293b",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#e2e8f0",
    paddingBottom: 5,
  },
  activity: {
    flexDirection: "row",
    marginBottom: 8,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  activityPhysical: {
    backgroundColor: "#dbeafe",
    borderColor: "#bfdbfe",
  },
  activityMental: {
    backgroundColor: "#f3e8fd",
    borderColor: "#e9d8fd",
  },
  activityOlfactory: {
    backgroundColor: "#dcfce7",
    borderColor: "#bbf7d0",
  },
  activityChewing: {
    backgroundColor: "#fed7aa",
    borderColor: "#fdba74",
  },
  activityRest: {
    backgroundColor: "#fce7f3",
    borderColor: "#fbcfe8",
  },
  activityMeal: {
    backgroundColor: "#fef9c3",
    borderColor: "#fef08a",
  },
  time: {
    width: "30%",
    color: "#64748b",
    fontSize: 12,
  },
  name: {
    width: "70%",
    color: "#1e293b",
    fontSize: 12,
  },
  feedback: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: "#f0f9ff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#bae6fd",
  },
  feedbackText: {
    fontSize: 12,
    color: "#0369a1",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: "center",
    fontSize: 10,
    color: "#64748b",
  },
});

const getActivityStyle = (type: ActivityType) => {
  switch (type) {
    case "PHYSICAL":
      return styles.activityPhysical;
    case "MENTAL":
      return styles.activityMental;
    case "OLFACTORY":
      return styles.activityOlfactory;
    case "CHEWING":
      return styles.activityChewing;
    case "REST":
      return styles.activityRest;
    case "MEAL":
      return styles.activityMeal;
    default:
      return {};
  }
};

const PlanningPDF = ({ activities }: { activities: PlannedActivity[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Planning de la journée</Text>
        <Text style={styles.subtitle}>Pour le bien-être de ton chien</Text>
        <View style={styles.instagramContainer}>
          <Image source="/entre-pawtes.png" style={styles.instagramLogo} />
          <Text style={styles.instagram}>@entre.pawtes</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Planning des activités</Text>
        {activities.map((activity) => (
          <View
            key={activity.id}
            style={[styles.activity, getActivityStyle(activity.activity.type)]}
          >
            <Text style={styles.time}>
              {activity.startTime} - {activity.endTime}
            </Text>
            <Text style={styles.name}>
              {activity.activity.name} ({activity.duration}min)
              {activity.distributionType &&
                ` - ${
                  activity.distributionType === "bowl"
                    ? "Gamelle"
                    : activity.distributionType === "enrichment"
                    ? "Jouet"
                    : "Herbe"
                }`}
              {activity.walkingStyle &&
                ` - ${
                  activity.walkingStyle === "pulling" ? "Tirant" : "Sentant"
                }`}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>
        Généré le {new Date().toLocaleDateString("fr-FR")} - Entre Pawtes
      </Text>
    </Page>
  </Document>
);

const AddActivityDrawer = ({
  onAddActivity,
  isOpen,
  onOpenChange,
}: {
  onAddActivity: (activity: PlannedActivity) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [selectedActivityId, setSelectedActivityId] = useState<string>("");
  const [activityDuration, setActivityDuration] = useState(15);
  const [activityStartTime, setActivityStartTime] = useState("09:00");
  const [distributionType, setDistributionType] =
    useState<DistributionType>("bowl");
  const [walkingStyle, setWalkingStyle] = useState<WalkingStyle>("pulling");

  const selectedActivity = predefinedActivities.find(
    (a) => a.id === selectedActivityId
  );

  const quickDurations = [15, 30, 45, 60];

  useEffect(() => {
    if (selectedActivity) {
      setActivityDuration(selectedActivity.defaultDuration);
    }
  }, [selectedActivity]);

  const calculateEndTime = (startTime: string, duration: number) => {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const endHour = startHour + Math.floor((startMinute + duration) / 60);
    const endMinute = (startMinute + duration) % 60;
    return `${endHour.toString().padStart(2, "0")}:${endMinute
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAddActivity = () => {
    if (!selectedActivity || !activityStartTime) return;

    const newActivity: PlannedActivity = {
      id: `${selectedActivity.id}-${activityStartTime}`,
      activity: selectedActivity,
      startTime: activityStartTime,
      endTime: calculateEndTime(activityStartTime, activityDuration),
      duration: activityDuration,
      ...(selectedActivity.hasDistributionType && { distributionType }),
      ...(selectedActivity.hasWalkingStyle && { walkingStyle }),
    };

    onAddActivity(newActivity);
    onOpenChange(false);
    setSelectedActivityId("");
    setActivityDuration(15);
    setActivityStartTime("09:00");
    setDistributionType("bowl");
    setWalkingStyle("pulling");
  };

  const canAddActivity =
    selectedActivityId !== "" &&
    activityStartTime !== "" &&
    activityDuration > 0 &&
    (!selectedActivity?.hasDistributionType ||
      distributionType !== undefined) &&
    (!selectedActivity?.hasWalkingStyle || walkingStyle !== undefined);

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-white">
        <DrawerHeader className="border-b">
          <DrawerTitle>Ajouter une activité</DrawerTitle>
        </DrawerHeader>
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Type d&apos;activité</label>
            <Select
              value={selectedActivityId}
              onValueChange={setSelectedActivityId}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une activité" />
              </SelectTrigger>
              <SelectContent>
                {predefinedActivities.map((activity) => (
                  <SelectItem key={activity.id} value={activity.id}>
                    {activity.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedActivity?.hasDistributionType && (
            <>
              <Info>
                Pour stimuler le mental et le flair de ton chien, nous
                recommandons de distribuer son repas via un jouet
                d&apos;occupation ou en le dispersant dans l&apos;herbe plutôt
                que dans une gamelle classique.
              </Info>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Type de distribution
                </label>
                <Select
                  value={distributionType}
                  onValueChange={(value: DistributionType) =>
                    setDistributionType(value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner le type de distribution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bowl">Gamelle classique</SelectItem>
                    <SelectItem value="enrichment">
                      Jouet d&apos;occupation
                    </SelectItem>
                    <SelectItem value="grass">Dans l&apos;herbe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {selectedActivity?.hasWalkingStyle && (
            <>
              <Info>
                Laisser ton chien sentir pendant la promenade est très important
                pour sa stimulation mentale et olfactive. Un chien qui tire
                constamment se fatigue beaucoup plus rapidement !
              </Info>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Style de promenade
                </label>
                <Select
                  value={walkingStyle}
                  onValueChange={(value: WalkingStyle) =>
                    setWalkingStyle(value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner le style de promenade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pulling">
                      Tirant sur la laisse
                    </SelectItem>
                    <SelectItem value="sniffing">Sentant librement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium">Heure de début</label>
            <Input
              type="time"
              value={activityStartTime}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setActivityStartTime(e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Durée (minutes)</label>
            <div className="flex gap-2 mb-2">
              {quickDurations.map((duration) => (
                <Button
                  key={duration}
                  variant={
                    activityDuration === duration ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setActivityDuration(duration)}
                >
                  {duration}min
                </Button>
              ))}
            </div>
            <Input
              type="number"
              min="1"
              max="120"
              value={activityDuration}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setActivityDuration(parseInt(e.target.value) || 15)
              }
            />
          </div>
          <Button
            onClick={handleAddActivity}
            disabled={!canAddActivity}
            className="w-full"
          >
            Ajouter l&apos;activité
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default function Planning() {
  const [plannedActivities, setPlannedActivities] = useState<PlannedActivity[]>(
    []
  );
  const [feedback, setFeedback] = useState<string[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load activities from localStorage on mount
  useEffect(() => {
    const savedActivities = localStorage.getItem("plannedActivities");
    if (savedActivities) {
      setPlannedActivities(JSON.parse(savedActivities));
    }
  }, []);

  // Save activities to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "plannedActivities",
      JSON.stringify(plannedActivities)
    );
  }, [plannedActivities]);

  const handleReset = () => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer tout le planning ?")
    ) {
      setPlannedActivities([]);
      localStorage.removeItem("plannedActivities");
    }
  };

  const calculateFeedback = () => {
    if (plannedActivities.length === 0) {
      setFeedback(["Commence à planifier les activités de ton chien !"]);
      return;
    }

    const newFeedback: string[] = [];
    const walks = plannedActivities.filter(
      (activity) =>
        activity.activity.type === "PHYSICAL" && activity.activity.id === "walk"
    );
    const mentalActivities = plannedActivities.filter(
      (activity) => activity.activity.type === "MENTAL"
    );
    const chewingActivities = plannedActivities.filter(
      (activity) => activity.activity.type === "CHEWING"
    );

    // Vérification des promenades
    if (walks.length === 0) {
      newFeedback.push(
        "🚶‍♂️ Ton chien a besoin d'au moins une promenade par jour !"
      );
    } else if (walks.length === 1) {
      const walkDuration = walks[0].duration;
      if (walkDuration < 45) {
        newFeedback.push("⏱️ La promenade devrait idéalement durer 45 minutes");
      }
      if (mentalActivities.length === 0) {
        newFeedback.push(
          "🧠 Pense à ajouter une activité mentale pour compenser"
        );
      }
    } else if (walks.length === 2) {
      const totalWalkDuration = walks.reduce(
        (acc, walk) => acc + walk.duration,
        0
      );
      if (totalWalkDuration < 90) {
        newFeedback.push(
          "⏱️ Les deux promenades devraient idéalement durer 45 minutes chacune"
        );
      }
    }

    // Vérification de la mastication
    if (chewingActivities.length === 0) {
      newFeedback.push(
        "🦴 Ton chien a besoin d'un moment de mastication par jour"
      );
    }

    // Vérification des activités mentales
    if (mentalActivities.length === 0) {
      if (walks.length < 2) {
        newFeedback.push(
          "🧠 Ajoute une activité mentale ou une promenade supplémentaire"
        );
      }
    } else if (mentalActivities.length === 1) {
      const mentalDuration = mentalActivities[0].duration;
      if (mentalDuration < 15) {
        newFeedback.push(
          "⏱️ L'activité mentale devrait idéalement durer 15 minutes"
        );
      }
    }

    // Message de succès
    if (newFeedback.length === 0) {
      newFeedback.push(
        "🎉 Parfait ! La journée de ton chien est bien équilibrée !"
      );
    }

    setFeedback(newFeedback);
  };

  useEffect(() => {
    calculateFeedback();
  }, [plannedActivities]);

  const addActivity = (newActivity: PlannedActivity) => {
    setPlannedActivities((prev) =>
      [...prev, newActivity].sort((a, b) =>
        a.startTime.localeCompare(b.startTime)
      )
    );
  };

  const removeActivity = (id: string) => {
    setPlannedActivities((prev) =>
      prev.filter((activity) => activity.id !== id)
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Planifie la journée de ton chien</h2>
        <div className="flex gap-2">
          {plannedActivities.length > 0 && (
            <>
              <PDFDownloadLink
                document={<PlanningPDF activities={plannedActivities} />}
                fileName="planning.pdf"
                className="text-sm"
              >
                {({ loading }) => (
                  <Button variant="outline" className="text-sm">
                    {loading ? "Génération..." : "Télécharger le PDF"}
                  </Button>
                )}
              </PDFDownloadLink>
              <Button
                onClick={handleReset}
                variant="destructive"
                className="text-sm"
              >
                Supprimer mon planning
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="border p-4 rounded-lg bg-white shadow-sm">
        <div className="mb-8">
          <h3 className="font-semibold mb-4">Conseils pour la journée</h3>
          <div className="p-3 bg-gray-50 rounded-lg space-y-2">
            {feedback.map((message, index) => (
              <p key={index} className="text-sm">
                {message}
              </p>
            ))}
          </div>
        </div>

        <h3 className="font-semibold mb-4">Planning de la journée</h3>
        <div className="space-y-2">
          {plannedActivities.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Aucune activité planifiée</p>
              <Button onClick={() => setIsDrawerOpen(true)}>
                Ajouter une activité
              </Button>
            </div>
          ) : (
            <>
              {plannedActivities.map((plannedActivity) => (
                <div
                  key={plannedActivity.id}
                  className="flex items-center gap-4 p-3 border rounded hover:bg-gray-50 transition-colors"
                >
                  <div className="w-32 font-medium">
                    {plannedActivity.startTime} - {plannedActivity.endTime}
                  </div>
                  <div
                    className={`flex-1 p-2 rounded ${plannedActivity.activity.color}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>
                        {plannedActivity.activity.name} (
                        {plannedActivity.duration}
                        min)
                      </span>
                      {plannedActivity.distributionType && (
                        <span className="text-sm opacity-75">
                          {plannedActivity.distributionType === "bowl"
                            ? "Gamelle"
                            : plannedActivity.distributionType === "enrichment"
                            ? "Jouet"
                            : "Herbe"}
                        </span>
                      )}
                      {plannedActivity.walkingStyle && (
                        <span className="text-sm opacity-75">
                          {plannedActivity.walkingStyle === "pulling"
                            ? "Tirant"
                            : "Sentant"}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => removeActivity(plannedActivity.id)}
                    className="p-2 hover:bg-red-100 rounded transition-colors"
                    aria-label="Supprimer l'activité"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <div className="pt-4">
                <Button
                  onClick={() => setIsDrawerOpen(true)}
                  variant="outline"
                  className="w-full"
                >
                  Ajouter une activité
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      <AddActivityDrawer
        onAddActivity={addActivity}
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      />
    </div>
  );
}
