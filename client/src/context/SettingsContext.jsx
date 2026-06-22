import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const SettingsContext =
  createContext();

export const SettingsProvider =
({ children }) => {

  const [settings,
    setSettings] =
    useState(null);

  const [loading,
    setLoading] =
    useState(true);

  const fetchSettings =
  async () => {

    try {

      const { data } =
        await API.get(
          "/settings"
        );

      setSettings(data);

    } catch (error) {

      console.log(
        "Settings Fetch Error:",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchSettings();

    const handleUpdate =
      () => {
        fetchSettings();
      };

    window.addEventListener(
      "settingsUpdated",
      handleUpdate
    );

    return () => {

      window.removeEventListener(
        "settingsUpdated",
        handleUpdate
      );

    };

  }, []);

  const updateSettings =
  async (newSettings) => {

    try {

      const { data } =
        await API.put(
          "/settings",
          newSettings
        );

      setSettings(data);

      window.dispatchEvent(
        new Event(
          "settingsUpdated"
        )
      );

      return data;

    } catch (error) {

      console.log(error);

      throw error;
    }
  };

  return (

    <SettingsContext.Provider
      value={{
        settings,
        loading,
        fetchSettings,
        updateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>

  );
};

export const useSettings =
() =>
  useContext(
    SettingsContext
  );